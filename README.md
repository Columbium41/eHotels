# eHotels
## Account Sign-In Details
#### Employee SSN: 123 456 789
#### Customer SSN: 987 654 321

## Installation Steps
1. Clone the repository
```bash
git clone https://github.com/Columbium41/eHotels.git
```

2. Install Node
- Node installation depends on operating system

3. Install Node Packages
```bash
# install frontend packages
cd frontend
npm i

# install backend packages
cd ../backend
npm i
```

4. Install PostgreSQL & PostgreSQL Shell
- PostgreSQL installation depends on operating system

5. Create Local Database (run the following in a PostgreSQL shell)
```SQL
CREATE USER eHotelsUser WITH PASSWORD '<password (optional)>';
CREATE DATABASE eHotels OWNER eHotelsUser;
```

6. Create a .env file in the backend folder
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

7. Setup Local Database
```bash
cd backend

# Drop tables
psql -p <your postgresql port> -U ehotelsuser -d ehotels < ./scripts/drop_tables.sql

# Create tables
psql -p <your postgresql port> -U ehotelsuser -d ehotels < ./scripts/create_tables.sql

# Create Views
psql -p <your postgresql port> -U ehotelsuser -d ehotels < ./scripts/create_views.sql

# Populate Hotel Tables
psql -p <your postgresql port> -U ehotelsuser -d ehotels < ./scripts/populate_hotel_tables.sql

# Populate user tables
node ./scripts/populate_user_tables.js
```

8. Run the app
- Terminal 1
```bash
cd frontend
npm run dev
```

- Terminal 2
```bash
cd backend
npm run server
```
