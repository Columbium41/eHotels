# eHotels
WIP Description aaa

## Account Sign-In Details
#### Employee SSN: 123 456 789
#### Customer SSN: 987 654 321

## Dev Environment Setup
1. Clone the repository
```bash
git clone https://github.com/Columbium41/eHotels.git
```

2. Install Node Packages
```bash
# install frontend packages
cd frontend
npm i

# install backend packages
cd ../backend
npm i
```

3. Install PostgreSQL V14

4. Create Local Database (run the following in a PostgreSQL shell)
```SQL
CREATE USER eHotelsUser WITH PASSWORD '<password (optional)>';
CREATE DATABASE eHotels OWNER eHotelsUser;
```

5. Create .env file in the backend repo
```bash
cd backend
touch .env
```

.env file contents:
```env
PORT = 3000
PG_USER = "ehotelsuser"
PG_PASSWORD = "<your postgresql user's password>"
PG_DATABASE = "ehotels"
PG_HOST = "localhost"
PG_PORT = "<your postgresql's port (by default 5432)>"
```

6. Populate Local Database
```bash
cd backend

# Drop tables
psql -p <your postgresql port> -U ehotelsuser -d ehotels < ./backend/scripts/drop_tables.sql

# Create tables
psql -p <your postgresql port> -U ehotelsuser -d ehotels < ./backend/scripts/create_tables.sql

# Populate Hotel Tables
psql -p <your postgresql port> -U ehotelsuser -d ehotels < ./backend/scripts/populate_hotel_tables.sql

# Populate user tables
node ./backend/scripts/populate_user_tables.js
```

7. Run the app
```bash
# start frontend
cd frontend
npm run dev

# start backend
cd backend
npm run server
```
