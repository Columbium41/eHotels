# eHotels
WIP Description aaa

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

5. Populate Local Database
```bash
cd backend
psql -p <your postgresql port> -U ehotelsuser -d ehotels < ./backend/scripts/drop_tables.sql # run before if database is not empty
psql -p <your postgresql port> -U ehotelsuser -d ehotels < ./backend/scripts/create_tables.sql
psql -p <your postgresql port> -U ehotelsuser -d ehotels < ./backend/scripts/populate_hotel_tables.sql
node ./backend/scripts/populate_user_tables.js
```

6. Create .env file in the backend repo
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

7. Run the app
```bash
# start frontend
cd frontend
npm run dev

# start backend
cd backend
npm run server
```
