# jwt-pern-auth

Authentication webpage made with JSON web token, postgreSQL, Express, ReactJS and NodeJS.

### Description

- Basic authentication page that can be used as a template or example for a real web application that needs user authentification.

- Backend made with Node plus Express framework for the API and PostgreSQL with pg module for the database.

- Frontend made with React (using create-react-app for the boilerplate), react-router-dom, react-toastify and axios for the HTTP requests to the API.

### Functionality

**_Backend_**

In the backend we have our 2 main routes. Register and Login, both using a middleware to check if the info sent to us is valid.

In the register route, after we check that the user is inputting a valid email and that the email is not already registered in our database, we proceed to hash the password
using bcrypt and then the user information is stored in the database. After that we use jsonwebtoken to generate our user authentication token.

In the register route, we do the exact same things as we do on our register route, but instead of storing the information that the user inputs, we compare it with the one on
the database, and if it's true, we then proceed to generate our json web token.

Then, we have the verify route, that uses a middleware to check if the user has a valid token.
This route is basically used in the frontend, to check if the user is logged in or not, in order to know which pages is he allowed to visit.

Finally, we have the dashboard route, that uses the same middleware as the verify route.
This route is used to get the user information in order to display it in the frontend.

**_Frontend_**

In the frontend we use react-router-dom to display our pages for Register, Login and the Dashboard.

We also use the Context to pass down state and functions, related to authentification, to all pages and components.

React-toastify is used to display messages for the user in order to have a better experience interacting with the page e.g "Successfully logged in", "User already exist", "Password or Email is incorrect".

Finally axios is used to make all the HTTP requests so our frontend can interact with the API.

### Usage

1. Go into both the server and client folders and run 'npm install' to install all the dependencies from package.json.

2. In the server directory create a .env file and set up the following enviroment variables:

   - PORT=4000 _Or whichever port you prefer_
   - PGUSER= _Your psql user_
   - PGHOST=localhost
   - PGPASSWORD= _The password for your psql user_
   - PGDATABASE=jwt_pern_auth _Or whatever you decided to name the database for this_
   - PGPORT=5432 _Default postgreSQL port_
   - jwtSecret=yourJWTsecret _This is used to encrypt and decrypt our json web token, so choose something strong_

3. Go into the server/database folder and create a database using the db.sql file. If you have problems with this rembember to install uuid-ossp extension in postgres (create extension if not exists "uuid-ossp";)

4. If you don't have it, install nodemon globally to run your server (npm i -g nodemon). I recommend nodemon because you can make changes to your backend without having to restart it after every change.

5. Run 'nodemon' inside your server folder and run 'npm start' in your client folder

6. Use the webapp!

### Acknowledgments

This simple authentication page was made with the help of The Stoic Programmers youtube channel.

This authentication page is far from perfect but I believe that with some minor improvements it can be easily used in a real web application.
