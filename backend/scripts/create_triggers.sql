DROP TRIGGER IF EXISTS calculate_total_cost ON Archive;


CREATE OR REPLACE FUNCTION update_total_cost()
RETURNS TRIGGER AS $$
DECLARE
    num_days INTEGER;
BEGIN
    SELECT price INTO NEW.cost
    FROM Room
    WHERE room_id = NEW.room_id;
    num_days := EXTRACT(DAY FROM NEW.end_date - NEW.start_date) + 1;
    NEW.cost := NEW.cost * num_days;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;


CREATE TRIGGER calculate_total_cost
BEFORE INSERT ON Archive
FOR EACH ROW
EXECUTE FUNCTION update_total_cost();




DROP TRIGGER IF EXISTS check_hotel_manager ON Employee;


CREATE OR REPLACE FUNCTION check_hotel_manager()
RETURNS TRIGGER AS $$
DECLARE SSN varchar(11);
DECLARE hotelID int;
DECLARE isManager varchar(11); 
DECLARE otherManagers varchar(11)[];
BEGIN

    SSN = OLD.employee_SSN;
    hotelID = OLD.hotel_id;
    IF TG_OP = 'UPDATE' THEN
        IF OLD.hotel_id IS NOT DISTINCT FROM NEW.hotel_id THEN
            RETURN NEW;
        END IF;
    END IF;

    SELECT employee_SSN INTO isManager
    FROM EmployeePositionJoin
    WHERE employee_SSN = SSN AND position = 'Manager';

    IF isManager IS NULL THEN
        RETURN NEW;
    END IF;

    otherManagers = ARRAY(
        SELECT Employee.employee_SSN 
		FROM Employee INNER JOIN EmployeePositionJoin ON Employee.employee_SSN = EmployeePositionJoin.employee_SSN
        WHERE hotel_id = hotelID AND position = 'Manager'
    );

    IF array_length(otherManagers, 1) = 1 THEN
        RAISE NOTICE 'This operation on % has been canceled in order to preserve the "at least 1 manager per hotel" requirement', TG_TABLE_NAME;
        RETURN null;

    ELSE
        RETURN NEW;
    END IF;
END;
$$ LANGUAGE plpgsql;


CREATE TRIGGER check_hotel_manager
BEFORE UPDATE OR DELETE ON Employee
FOR EACH ROW
EXECUTE FUNCTION check_hotel_manager();
