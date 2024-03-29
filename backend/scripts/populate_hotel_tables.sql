INSERT INTO HotelChain (hotel_chain_name, address) VALUES (
    ('Hilton','4170 Vel Street, Denver, Nevada, United States'),
    ('Marriott','349 Mi. Street, Watson Lake, Yukon, Canada'),
    ('Millennium','4847 Nulla Road, Town of Yarmouth, Colorado, United States'),
    ('Travelodge','6971 Non Road, Prince Albert, Iowa, United States'),
    ('GreenTree Inns', '541 Tortor Avenue, West Valley City, Oklahoma, United States')
);

INSERT INTO HotelChainPhoneNumber (phone_number, hotel_chain_name) VALUES (
    ('635-803-6315', 'Hilton'),
    ('466-808-2313', 'Marriott'),
    ('829-276-6353', 'Millennium'),
    ('622-370-7449', 'Travelodge'),
    ('748-175-6329', 'GreenTree Inns')
);

INSERT INTO HotelChainEmailAddress (email, hotel_chain_name) VALUES (
    ('sed@icloud.com', 'Hilton'),
    ('hendrerit@google.ca', 'Mariott'),
    ('lobortis.risus@yahoo.com', 'Millennium'),
    ('nullam.velit@hotmail.com', 'Travelodge'),
    ('tellus.lorem@outlook.net', 'GreenTree Inns')
);


INSERT INTO Hotel (hotel_id, hotel_chain_name, manager_SSN, rating, number_of_rooms, address, email, phone_number) VALUES (
    (0, 'Hilton', 10000000000, 3, 5, '123 That St, RandomPlace, Canada', 'hotel0@example.com', '133-551-5989'),
    (1, 'Hilton', 11000000000, 3, 5, '123 Main St, Anytown, USA', 'hotel1@example.com', '321-098-5672'),
    (2, 'Hilton', 12000000000, 3, 5, '123 Second St, Anytown, USA', 'hotel2@example.com', '123-456-7890'),
    (3, 'Hilton', 13000000000, 4, 5, '456 Elm St, Othertown, Canada', 'hotel3@example.com', '198-765-4321'),
    (4, 'Hilton', 14000000000, 2, 5, '789 Oak St, Anycity, USA', 'hotel4@example.com', '135-792-4680'),
    (5, 'Hilton', 15000000000, 5, 5, '321 Maple St, Anystate, USA', 'hotel5@example.com', '102-938-4756'),
    (6, 'Hilton', 16000000000, 3, 5, '654 Pine St, Othercity, Canada', 'hotel6@example.com', '174-205-8963'),
    (7, 'Hilton', 17000000000, 4, 5, '987 Cedar St, Anothercity, USA', 'hotel7@example.com', '109-876-5432'),
    (8, 'Marriott', 20000000000, 2, 5, '654 Birch St, Yetanothercity, Canada', 'hotel8@example.com', '162-738-4950'),
    (9, 'Marriott', 21000000000, 3, 5, '321 Willow St, Finalcity, Canada', 'hotel9@example.com', '182-736-4950'),
    (10, 'Marriott', 22000000000, 3, 5, '456 Elm St, Othertown, USA', 'hotel10@example.com', '987-654-3210'),
    (11, 'Marriott', 23000000000, 5, 5, '789 Maple St, Anystate, USA', 'hotel11@example.com', '456-789-0123'),
    (12, 'Marriott', 24000000000, 2, 5, '321 Pine St, Othertown, USA', 'hotel12@example.com', '654-321-0987'),
    (13, 'Marriott', 25000000000, 4, 5, '987 Cedar St, Anothercity, Canada', 'hotel13@example.com', '321-098-7654'),
    (14, 'Marriott', 26000000000, 3, 5, '654 Birch St, Yetanothercity, USA', 'hotel14@example.com', '789-012-3456'),
    (15, 'Marriott', 27000000000, 3, 5, '123 Willow St, Finalcity, Canada', 'hotel15@example.com', '890-123-4567'),
    (16, 'Millenium', 30000000000, 4, 5, '456 Cedar St, Lastcity, USA', 'hotel16@example.com', '234-567-8901'),
    (17, 'Millennium', 31000000000, 4, 5, '123 Oak St, Anycity, USA', 'hotel17@example.com', '111-222-3333'),
    (18, 'Millennium', 32000000000, 3, 5, '456 Elm St, Othertown, Canada', 'hotel18@example.com', '444-555-6666'),
    (19, 'Millennium', 33000000000, 5, 5, '789 Maple St, Anystate, Canada', 'hotel19@example.com', '777-888-9999'),
    (20, 'Millennium', 34000000000, 2, 5, '321 Pine St, Othercity, Canada', 'hotel20@example.com', '123-656-7890'),
    (21, 'Millennium', 35000000000, 4, 5, '987 Cedar St, Lastcity, USA', 'hotel21@example.com', '334-567-8901'),
    (22, 'Millennium', 36000000000, 3, 5, '654 Birch St, Yetanothercity, USA', 'hotel22@example.com', '345-678-9012'),
    (23, 'Millennium', 37000000000, 4, 5, '123 Willow St, Finalcity, USA', 'hotel23@example.com', '596-789-0123'),
    (24, 'Travelodge', 40000000000, 3, 5, '456 Cedar St, Lastcity, Canada', 'hotel24@example.com', '567-890-1234'),
    (25, 'Travelodge', 41000000000, 4, 5, '123 Oak St, Anycity, Canada', 'hotel25@example.com', '813-222-3333'),
    (26, 'Travelodge', 42000000000, 3, 5, '456 Elm St, Othertown, USA', 'hotel26@example.com', '928-555-6666'),
    (27, 'Travelodge', 43000000000, 5, 5, '789 Maple St, Yetanothercity, USA', 'hotel27@example.com', '727-888-9999'),
    (28, 'Travelodge', 44000000000, 2, 5, '321 Pine St, Othercity, USA', 'hotel28@example.com', '115-456-7890'),
    (29, 'Travelodge', 45000000000, 4, 5, '987 Cedar St, Anothercity, USA', 'hotel29@example.com', '201-567-8901'),
    (30, 'Travelodge', 46000000000, 3, 5, '654 Birch St, Yetanothercity, USA', 'hotel30@example.com', '345-678-9012'),
    (31, 'Travelodge', 47000000000, 4, 5, '123 Willow St, Finalcity, USA', 'hotel31@example.com', '456-789-0123'),
    (32, 'GreenTree Inns', 50000000000, 4, 5, '123 Oak St, Anycity, Canada', 'hotel32@example.com', '129-222-3333'),
    (33, 'GreenTree Inns', 51000000000, 3, 5, '456 Elm St, Anycity, Canada', 'hotel33@example.com', '768-555-6666'),
    (34, 'GreenTree Inns', 52000000000, 5, 5, '789 Maple St, Anystate, Canada', 'hotel34@example.com', '682-209-9999'),
    (35, 'GreenTree Inns', 53000000000, 2, 5, '321 Pine St, Othercity, USA', 'hotel35@example.com', '178-456-7890'),
    (36, 'GreenTree Inns', 54000000000, 4, 5, '987 Cedar St, Anothercity, USA', 'hotel36@example.com', '573-567-8901'),
    (37, 'GreenTree Inns', 55000000000, 3, 5, '654 Birch St, Yetanothercity, Canada', 'hotel37@example.com', '987-678-9012'),
    (38, 'GreenTree Inns', 56000000000, 4, 5, '123 Willow St, Finalcity, USA', 'hotel38@example.com', '788-789-0123'),
    (39, 'GreenTree Inns', 57000000000, 3, 5, '456 Cedar St, Lastcity, USA', 'hotel39@example.com', '333-890-1234')
);

INSERT INTO Amenity (amenity) VALUES (
    ('TV'),
    ('AC'),
    ('fridge')
);

INSERT INTO Room (room_id, hotel_id, price, capacity, view, extendable) 
VALUES (
    (5, 0, 150.00, 1, 'sea', true),
    (6, 0, 180.00, 2, 'mountain', true),
    (7, 0, 200.00, 3, 'sea', true),
    (8, 0, 220.00, 4, 'mountain', false),
    (9, 0, 250.00, 5, 'sea', false),
    (10, 1, 160.00, 1, 'sea', false),
    (11, 1, 190.00, 2, 'mountain', false),
    (12, 1, 210.00, 3, 'sea', true),
    (13, 1, 230.00, 4, 'mountain', false),
    (14, 1, 260.00, 5, 'sea', false),
    (15, 2, 170.00, 1, 'sea', true),
    (16, 2, 200.00, 2, 'mountain', true),
    (17, 2, 220.00, 3, 'sea', true),
    (18, 2, 240.00, 4, 'mountain', false),
    (19, 2, 270.00, 5, 'sea', false),
    (20, 3, 190.00, 1, 'sea', false),
    (21, 3, 220.00, 2, 'mountain', true),
    (22, 3, 240.00, 3, 'sea', true),
    (23, 3, 260.00, 4, 'mountain', false),
    (24, 3, 290.00, 5, 'sea', true),
    (25, 4, 200.00, 1, 'sea', true),
    (26, 4, 230.00, 2, 'mountain', false),
    (27, 4, 250.00, 3, 'sea', true),
    (28, 4, 270.00, 4, 'mountain', false),
    (29, 4, 300.00, 5, 'sea', true),
    (30, 5, 210.00, 1, 'sea', true),
    (31, 5, 240.00, 2, 'mountain', false),
    (32, 5, 260.00, 3, 'sea', true),
    (33, 5, 280.00, 4, 'mountain', false),
    (34, 5, 310.00, 5, 'sea', true)
    (35, 6, 220.00, 1, 'sea', true),
    (36, 6, 250.00, 2, 'mountain', false),
    (37, 6, 270.00, 3, 'sea', true),
    (38, 6, 290.00, 4, 'mountain', false),
    (39, 6, 320.00, 5, 'sea', true)
    (40, 7, 230.00, 1, 'sea', true),
    (41, 7, 260.00, 2, 'mountain', false),
    (42, 7, 280.00, 3, 'sea', true),
    (43, 7, 300.00, 4, 'mountain', false),
    (44, 7, 330.00, 5, 'sea', true),
    (45, 8, 240.00, 1, 'sea', false),
    (46, 8, 270.00, 2, 'sea', true),
    (47, 8, 290.00, 3, 'mountain', true),
    (48, 8, 310.00, 4, 'mountain', false),
    (49, 8, 340.00, 5, 'mountain', true),
    (50, 9, 250.00, 1, 'sea', true),
    (51, 9, 280.00, 2, 'mountain', false),
    (52, 9, 300.00, 3, 'sea', true),
    (53, 9, 320.00, 4, 'mountain', true),
    (54, 9, 350.00, 5, 'sea', false),
    (55, 10, 260.00, 1, 'sea', true),
    (56, 10, 290.00, 2, 'sea', false),
    (57, 10, 310.00, 3, 'mountain', true),
    (58, 10, 330.00, 4, 'mountain', false),
    (59, 10, 360.00, 5, 'mountain', true),
    (60, 11, 270.00, 1, 'sea', false),
    (61, 11, 300.00, 2, 'sea', true),
    (62, 11, 320.00, 3, 'mountain', true),
    (63, 11, 340.00, 4, 'mountain', false),
    (64, 11, 370.00, 5, 'sea', true),
    (65, 12, 280.00, 1, 'mountain', true),
    (66, 12, 310.00, 2, 'mountain', false),
    (67, 12, 330.00, 3, 'sea', true),
    (68, 12, 350.00, 4, 'mountain', true),
    (69, 12, 380.00, 5, 'sea', false),
    (70, 13, 290.00, 1, 'sea', true),
    (71, 13, 320.00, 2, 'mountain', false),
    (72, 13, 340.00, 3, 'mountain', true),
    (73, 13, 360.00, 4, 'sea', true),
    (74, 13, 390.00, 5, 'sea', false),
    (75, 14, 300.00, 1, 'sea', true),
    (76, 14, 330.00, 2, 'mountain', false),
    (77, 14, 350.00, 3, 'sea', true),
    (78, 14, 370.00, 4, 'mountain', true),
    (79, 14, 400.00, 5, 'sea', false),
    (80, 15, 310.00, 1, 'sea', true),
    (81, 15, 340.00, 2, 'mountain', false),
    (82, 15, 360.00, 3, 'sea', true),
    (83, 15, 380.00, 4, 'mountain', true),
    (84, 15, 410.00, 5, 'sea', false)
    (85, 16, 420.00, 1, 'mountain', false),
    (86, 16, 450.00, 2, 'sea', true),
    (87, 16, 470.00, 3, 'sea', true),
    (88, 16, 490.00, 4, 'mountain', false),
    (89, 16, 520.00, 5, 'mountain', true),
    (90, 17, 430.00, 1, 'sea', false),
    (91, 17, 460.00, 2, 'sea', true),
    (92, 17, 480.00, 3, 'mountain', true),
    (93, 17, 500.00, 4, 'mountain', false),
    (94, 17, 530.00, 5, 'sea', true),
    (95, 18, 440.00, 1, 'mountain', true),
    (96, 18, 470.00, 2, 'mountain', false),
    (97, 18, 490.00, 3, 'sea', true),
    (98, 18, 510.00, 4, 'mountain', true),
    (99, 18, 540.00, 5, 'sea', false),
    (100, 19, 450.00, 1, 'sea', true),
    (101, 19, 480.00, 2, 'mountain', false),
    (102, 19, 500.00, 3, 'sea', true),
    (103, 19, 520.00, 4, 'mountain', true),
    (104, 19, 550.00, 5, 'sea', false),
    (105, 20, 460.00, 1, 'mountain', true),
    (106, 20, 490.00, 2, 'mountain', false),
    (107, 20, 510.00, 3, 'sea', true),
    (108, 20, 530.00, 4, 'sea', true),
    (109, 20, 560.00, 5, 'mountain', false),
    (110, 21, 470.00, 1, 'sea', false),
    (111, 21, 500.00, 2, 'sea', true),
    (112, 21, 520.00, 3, 'mountain', true),
    (113, 21, 540.00, 4, 'mountain', false),
    (114, 21, 570.00, 5, 'sea', true),
    (115, 22, 480.00, 1, 'mountain', true),
    (116, 22, 510.00, 2, 'mountain', false),
    (117, 22, 530.00, 3, 'sea', true),
    (118, 22, 550.00, 4, 'mountain', true),
    (119, 22, 580.00, 5, 'sea', false),
    (120, 23, 490.00, 1, 'sea', true),
    (121, 23, 520.00, 2, 'mountain', false),
    (122, 23, 540.00, 3, 'sea', true),
    (123, 23, 560.00, 4, 'mountain', true),
    (124, 23, 590.00, 5, 'sea', false),
    (125, 24, 600.00, 1, 'mountain', true),
    (126, 24, 630.00, 2, 'mountain', false),
    (127, 24, 650.00, 3, 'sea', true),
    (128, 24, 670.00, 4, 'mountain', true),
    (129, 24, 700.00, 5, 'sea', false),
    (130, 25, 610.00, 1, 'sea', true),
    (131, 25, 640.00, 2, 'mountain', false),
    (132, 25, 660.00, 3, 'sea', true),
    (133, 25, 680.00, 4, 'mountain', true),
    (134, 25, 710.00, 5, 'sea', false),
    (135, 26, 620.00, 1, 'mountain', true),
    (136, 26, 650.00, 2, 'mountain', false),
    (137, 26, 670.00, 3, 'sea', true),
    (138, 26, 690.00, 4, 'mountain', true),
    (139, 26, 720.00, 5, 'sea', false),
    (140, 27, 630.00, 1, 'sea', false),
    (141, 27, 660.00, 2, 'sea', true),
    (142, 27, 680.00, 3, 'mountain', true),
    (143, 27, 700.00, 4, 'mountain', false),
    (144, 27, 730.00, 5, 'sea', true),
    (145, 28, 640.00, 1, 'mountain', true),
    (146, 28, 670.00, 2, 'mountain', false),
    (147, 28, 690.00, 3, 'sea', true),
    (148, 28, 710.00, 4, 'mountain', true),
    (149, 28, 740.00, 5, 'sea', false),
    (150, 29, 650.00, 1, 'sea', true),
    (151, 29, 680.00, 2, 'mountain', false),
    (152, 29, 700.00, 3, 'sea', true),
    (153, 29, 720.00, 4, 'mountain', true),
    (154, 29, 750.00, 5, 'sea', false),
    (155, 30, 660.00, 1, 'mountain', true),
    (156, 30, 690.00, 2, 'mountain', false),
    (157, 30, 710.00, 3, 'sea', true),
    (158, 30, 730.00, 4, 'mountain', true),
    (159, 30, 760.00, 5, 'sea', false),
    (160, 31, 670.00, 1, 'sea', false),
    (161, 31, 700.00, 2, 'sea', true),
    (162, 31, 720.00, 3, 'mountain', true),
    (163, 31, 740.00, 4, 'mountain', false),
    (164, 31, 770.00, 5, 'sea', true),
    (165, 32, 780.00, 1, 'mountain', true),
    (166, 32, 810.00, 2, 'mountain', false),
    (167, 32, 830.00, 3, 'sea', true),
    (168, 32, 850.00, 4, 'mountain', true),
    (169, 32, 880.00, 5, 'sea', false),
    (170, 33, 790.00, 1, 'sea', true),
    (171, 33, 820.00, 2, 'mountain', false),
    (172, 33, 840.00, 3, 'sea', true),
    (173, 33, 860.00, 4, 'mountain', true),
    (174, 33, 890.00, 5, 'sea', false),
    (175, 34, 800.00, 1, 'mountain', true),
    (176, 34, 830.00, 2, 'mountain', false),
    (177, 34, 850.00, 3, 'sea', true),
    (178, 34, 870.00, 4, 'mountain', true),
    (179, 34, 900.00, 5, 'sea', false),
    (180, 35, 810.00, 1, 'sea', false),
    (181, 35, 840.00, 2, 'sea', true),
    (182, 35, 860.00, 3, 'mountain', true),
    (183, 35, 880.00, 4, 'mountain', false),
    (184, 35, 910.00, 5, 'sea', true),
    (185, 36, 820.00, 1, 'mountain', true),
    (186, 36, 850.00, 2, 'mountain', false),
    (187, 36, 870.00, 3, 'sea', true),
    (188, 36, 890.00, 4, 'mountain', true),
    (189, 36, 920.00, 5, 'sea', false),
    (190, 37, 830.00, 1, 'sea', true),
    (191, 37, 860.00, 2, 'mountain', false),
    (192, 37, 880.00, 3, 'sea', true),
    (193, 37, 900.00, 4, 'mountain', true),
    (194, 37, 930.00, 5, 'sea', false),
    (195, 38, 840.00, 1, 'mountain', true),
    (196, 38, 870.00, 2, 'mountain', false),
    (197, 38, 890.00, 3, 'sea', true),
    (198, 38, 910.00, 4, 'mountain', true),
    (199, 38, 940.00, 5, 'sea', false),
    (0, 39, 850.00, 1, 'sea', false),
    (1, 39, 880.00, 2, 'sea', true),
    (2, 39, 900.00, 3, 'mountain', true),
    (3, 39, 920.00, 4, 'mountain', false),
    (4, 39, 950.00, 5, 'sea', true);
);


INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (0, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (0, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (0, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (1, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (1, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (2, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (2, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (3, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (4, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (6, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (6, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (6, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (7, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (7, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (8, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (8, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (9, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (9, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (11, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (11, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (12, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (12, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (13, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (13, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (15, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (15, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (15, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (16, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (17, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (17, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (18, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (18, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (18, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (19, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (19, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (21, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (21, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (21, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (22, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (23, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (23, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (25, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (25, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (25, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (26, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (26, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (27, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (28, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (28, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (30, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (31, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (32, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (34, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (34, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (35, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (35, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (37, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (37, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (37, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (38, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (38, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (39, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (40, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (40, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (42, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (42, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (42, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (43, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (45, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (45, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (46, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (47, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (47, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (47, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (49, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (51, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (51, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (51, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (52, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (52, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (52, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (53, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (53, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (53, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (54, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (54, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (54, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (55, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (55, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (55, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (56, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (56, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (56, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (57, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (57, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (57, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (58, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (59, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (61, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (61, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (62, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (62, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (64, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (64, 'fridge');;
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (66, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (66, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (67, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (70, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (70, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (70, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (71, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (73, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (73, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (73, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (74, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (74, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (74, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (75, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (75, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (75, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (76, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (76, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (76, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (77, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (77, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (77, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (78, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (78, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (78, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (79, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (79, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (79, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (80, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (80, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (80, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (81, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (81, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (81, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (82, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (82, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (82, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (83, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (83, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (83, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (84, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (84, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (84, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (85, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (85, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (85, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (86, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (86, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (86, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (87, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (87, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (87, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (88, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (88, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (88, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (89, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (89, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (89, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (90, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (90, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (90, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (91, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (91, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (91, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (94, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (94, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (94, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (95, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (95, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (95, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (96, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (96, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (96, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (98, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (98, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (98, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (99, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (99, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (99, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (125, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (128, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (129, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (130, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (131, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (132, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (133, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (134, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (135, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (136, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (137, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (138, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (139, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (140, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (141, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (142, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (143, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (144, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (145, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (146, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (148, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (149, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (151, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (151, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (152, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (152, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (153, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (153, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (154, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (154, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (155, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (155, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (156, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (156, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (157, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (157, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (158, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (158, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (159, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (159, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (160, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (160, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (161, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (161, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (162, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (162, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (163, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (163, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (164, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (164, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (165, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (165, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (166, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (166, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (167, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (167, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (168, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (168, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (169, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (169, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (170, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (170, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (171, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (171, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (172, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (172, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (173, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (173, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (174, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (174, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (176, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (176, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (177, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (177, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (178, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (178, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (179, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (179, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (180, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (180, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (181, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (181, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (182, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (182, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (184, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (185, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (186, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (186, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (187, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (187, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (188, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (189, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (190, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (190, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (192, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (192, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (193, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (193, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (195, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (195, 'fridge');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (196, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (196, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (197, 'TV');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (198, 'AC');
INSERT INTO RoomAmenityJoin (room_id, amenity) VALUES (198, 'fridge');