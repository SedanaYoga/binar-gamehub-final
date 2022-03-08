<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Enhance Binar GameHub with Authentication and Interactive API Game</h3>
  <p align="center">
    Get to know Design Pattern, Sync & Async, and Authentication (PassportJS & JWT)

  </p>
</div>

<!-- ABOUT THE PROJECT -->

# About The Project

A repository for completing Binar Fullstack Web Development Bootcamp - Chapter 7.
![Dashboard Page][dashboard]
![Profile Page][profile-page]
![Sign In Page][signin-page]
![Sign Up Page][signup-page]
![Update User Page][update-user-page]
![Leaderboard][leaderboard]

<p align="right">(<a href="#top">back to top</a>)</p>

## Built With

The following lists show my development stack:

### Frontend Stack

- [Bootstrap v5.0](https://getbootstrap.com/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [Sass](https://sass-lang.com/)
- [EJS as View Engine](https://ejs.co/)

### Backend Stack

- [Vanilla Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [NodeJS including NPM](https://nodejs.org/en/)
- [ExpressJS](https://expressjs.com/)
- [JWT (Token Based)](https://jwt.io/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)

### Database

- [Sequelize](https://sequelize.org/)
- [PassportJS (Local)](https://www.passportjs.org/packages/passport-local/)

### Development Tools:

[Git](https://git-scm.com/)
[Neovim](https://neovim.io/)
[Nodemon](https://www.npmjs.com/package/nodemon)
[Morgan](https://www.npmjs.com/package/morgan)
[Dotenv](https://www.npmjs.com/package/dotenv)

<p align="right">(<a href="#top">back to top</a>)</p>

## What I've learnt?

Kind of additional page for previous challenge, this chapter I decided to rebuild my project both from Frontend and Backkend side, compiled with list below:

- `MVC + MCR` => design pattern isn't just about folder structure but more about development flow, since then my workflow seems intuitively easy, won't forget where to begin and where to search if the bugs coming amongs complex design.
- `Session vs Token Based Auth` => through the class, my facilitator just give us the exact point that should we know about differences between Session and Token Based Authentication, where for this project, we use both, Session for Website Portal and Token Based for RestFul API. Its quite tricky at first since my last challenge I was using memory logged user model to indicate who's logging in, but now its all handled by PassportJS. Thanks PassportJS ;)
- `Asynchronous Side in JS` => As I know, lots of people struggled this topic. However, lucky me as I managed to learn this topic earlier. The implementation to this project is almost required for connecting the backend to database. By using Async Await (don't forget try-catch also) my code seems clean and not confusing at all.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

# Getting Started

## New Feature

- Whole New UI Design for Dashboard, Update, and Profile page, cause the old one looks like s\*\*\* :D
  - Update Profile are now retrieving 2 Statistics from user_stats table, VS Comp & VS Player
  - Displaying User information in table based instead of sh\*tty box
- User Statistics table (user_stats) has been added to ease user's win/lose/draw data retrieval
- Users are able to Play RPS Game interactively with 2 Players via API (/api/v1/game)
- Password has been encrypted in database using Bcrypt
- Leaderboard page within the game to see 5 top players in both VS Comp and VS Player

## Prerequisites

If you want to edit the code, you need to have `nodejs` and `NPM`. Note: Sass files are not included here.

- Install all dependencies by this command if you already get node and npm installed in your system.

```sh
npm install
```

- You also need the to install PostgreSQL, download postgresql [here](https://www.postgresql.org/download/)
- Setup `/config/config.json`

```js
"development": {
    "username": <Your PostgreSQL Username>,
    "password": <Your PostgresSQL Password>,
    "database": "binar_gamehub",
    "host": "localhost",
    "dialect": "postgres"
  },
```

- Setup database using sequelize-cli for database migration and seeding, follow instruction [here](https://sequelize.org/master/manual/migrations.html)

Do this in sequence

```sh
sequelize db:drop
sequelize db:create
npm run db:reset
sequelize db:seed:all
```

- Set up `.env` file in root path and put this string in it

```
NODE_ENV=development
PORT=5000
SECRET_SESSION=randomStringForSession
SECRET_JWT=randomStringForJWT
```

# Usage

- Start the server by this command, it will run `node server.js`
  ```sh
  npm run start
  ```
- Open `localhost:5000` in your browser
- Available Users from seeding process

| Email            | Password   | Is Admin? |
| ---------------- | ---------- | --------- |
| admin@mail.com   | 123        | TRUE      |
| johndoe@mail.com | johndoe123 | FALSE     |
| janedoe@mail.com | janedoe123 | FALSE     |

<p align="right">(<a href="#top">back to top</a>)</p>

# PostgreSQL Table Structure

## The Tables

`user_games`

| Column    | Type    | Constraint | Value          |
| --------- | ------- | ---------- | -------------- |
| id        | INTEGER | PK         | Auto Generated |
| uuid      | UUID    | \-         | Auto Generated |
| username  | STRING  | NOTNULL    | input          |
| password  | STRING  | NOTNULL    | input          |
| email     | STRING  | NOTNULL    | input          |
| isAdmin   | BOOLEAN | NOTNULL    | input          |
| createdAt | DATE    | NOTNULL    | Auto Generated |
| updatedAt | DATE    | NOTNULL    | Auto Generated |

`user_game_histories`

| Column              | Type    | Constraint        | Value                 |
| ------------------- | ------- | ----------------- | --------------------- |
| id                  | INTEGER | PK                | Auto generated        |
| uuid                | UUID    | \-                | Auto generated        |
| fk_userId_histories | INTEGER | FK                | User ID               |
| user_uuid           | STRING  | \-                | User UUID             |
| score               | INTEGER | 1, -1, 0, NOTNULL | Fetched from the game |
| createdAt           | DATE    | NOTNULL           | Auto Generated        |
| updatedAt           | DATE    | NOTNULL           | Auto Generated        |

`user_game_biodata`

| Column            | Type    | Constraint | Value          |
| ----------------- | ------- | ---------- | -------------- |
| id                | INTEGER | PK         | Auto Generated |
| uuid              | UUID    | \-         | Auto Generated |
| fk_userId_biodata | INTEGER | FK         | User ID        |
| user_uuid         | STRING  | \-         | User UUID      |
| full_name         | STRING  | \-         | input          |
| dob               | STRING  | \-         | input          |
| address           | STRING  | \-         | input          |
| contact           | STRING  | \-         | input          |
| createdAt         | DATE    | NOTNULL    | Auto Generated |
| updatedAt         | DATE    | NOTNULL    | Auto Generated |

`rooms`

| Column      | Type    | Constraint | Value          |
| ----------- | ------- | ---------- | -------------- |
| id          | INTEGER | PK         | Auto Generated |
| uuid        | UUID    | \-         | Auto Generated |
| p1_uuid     | STRING  | NOTNULL    | input from API |
| p2_uuid     | STRING  | NOTNULL    | input from API |
| p1_hands    | STRING  | NOTNULL    | input from API |
| p1_hands    | STRING  | NOTNULL    | input from API |
| winner_uuid | STRING  | NOTNULL    | input from API |
| createdAt   | DATE    | NOTNULL    | Auto Generated |
| updatedAt   | DATE    | NOTNULL    | Auto Generated |

`user_stats`

| Column            | Type    | Constraint | Value                  |
| ----------------- | ------- | ---------- | ---------------------- |
| id                | INTEGER | PK         | Auto Generated         |
| uuid              | UUID    | \-         | Auto Generated         |
| user_uuid         | STRING  | \-         | User UUID              |
| fk_userId_stats   | INTEGER | \-         | User ID                |
| win_count_omp     | INTEGER | \-         | input from game result |
| lose_count_comp   | INTEGER | \-         | input from game result |
| draw_count_comp   | INTEGER | \-         | input from game result |
| win_count_player  | INTEGER | \-         | input from game result |
| lose_count_player | INTEGER | \-         | input from game result |
| draw_count_player | INTEGER | \-         | input from game result |
| createdAt         | DATE    | NOTNULL    | Auto Generated         |
| updatedAt         | DATE    | NOTNULL    | Auto Generated         |

## The Association

[![Table Association][table-association]](https://drawsql.app/syoga/diagrams/binar-gamehub)

# API Documentation

I created two branches of accessing API, from Portal and API Explorer.

## RestFul API

| #   | Method | Route                     | Functionality                                           | Payload Example                                                                                                                     |
| --- | ------ | ------------------------- | ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| 1   | POST   | /api/v1/auth/signup       | Create account through API                              | {<br>"username": "syoga",<br>"email": "syoga@mail.com",<br>"password": "123",<br>"confirmPassword": "123",<br>"isAdmin": true<br>}  |
| 2   | POST   | /api/v1/auth/signin       | Authenticate user with Token                            | {<br>"email": "johndoe@mail.com",<br>"password": "johndoe123"<br>}                                                                  |
| 3   | GET    | /api/v1/auth/whoami       | Return authenticated user json object                   | \-                                                                                                                                  |
| 4   | GET    | /api/v1/biodata           | Return all user biodata                                 | \-                                                                                                                                  |
| 5   | GET    | /api/v1/biodata/:uuid     | Return one user biodata                                 | \-                                                                                                                                  |
| 6   | PUT    | /api/v1/biodata/:uuid     | Update a user biodata                                   | {<br>"full_name": "System Administrator",<br>"dob": "1970-01-11",<br>"address": "Denpasar, Bali",<br>"contact": "087761344631"<br>} |
| 7   | POST   | /api/v1/game/room         | Create Room for interactive RPS Game                    | {<br>"name": "Weird Room"<br>}                                                                                                      |
| 8   | POST   | /api/v1/game/join         | Another player join the game room                       | {<br>"room_name": "Weird Room"<br>}                                                                                                 |
| 9   | POST   | /api/v1/game/hands        | Each player raise 3 choices for RPS Game                | {<br>"room_name": "Weird Room",<br>"hands": \[<br>"S", "S", "S"<br>\]<br>}                                                          |
| 10  | GET    | /api/v1/game/result/:uuid | Return the winner uuid if all players have raised hands | \-                                                                                                                                  |
| 11  | GET    | /api/v1/histories         | Return all history data                                 | \-                                                                                                                                  |
| 12  | GET    | /api/v1/histories/:uuid   | Return history by uuid                                  | \-                                                                                                                                  |
| 13  | POST   | /api/v1/histories         | Create a history to database                            | {<br>"user_uuid":"45b1d20d-ff22-46ac-a6d6-6ee1994a99b5",<br>"score": 1<br>}                                                         |
| 14  | PUT    | /api/v1/histories/:uuid   | Update a history by uuid                                | {<br>"score": 1<br>}                                                                                                                |
| 15  | DELETE | /api/v1/histories/:uuid   | Delete a history by uuid                                | \-                                                                                                                                  |
| 16  | GET    | /api/v1/users             | Return all users data object                            | \-                                                                                                                                  |
| 17  | GET    | /api/v1/users/:uuid       | Return a user object by uuid                            | \-                                                                                                                                  |
| 18  | POST   | /api/v1/users             | Create a user to the database                           | {<br>"username": "SedanaYoga",<br>"email": "sedana@gmail.com",<br>"password": "123",<br>"isAdmin": true<br>}                        |
| 19  | PUT    | /api/v1/users/:uuid       | Update a user by uuid                                   | {<br>"username":"SedanaYogaEdited2",<br>"email":"cokorda@yoga.com",<br>"password":"12345"<br>}                                      |
| 20  | DELETE | /api/v1/users/:uuid       | Delete a user by uuid                                   | \-                                                                                                                                  |

## Portal API

| #   | Method | Route                 | Functionality                                         |
| --- | ------ | --------------------- | ----------------------------------------------------- |
| 1   | GET    | /signup               | Render signup page                                    |
| 2   | POST   | /signup               | Add user to database                                  |
| 3   | GET    | /signin               | Render signin page                                    |
| 4   | POST   | /signin               | Authenticate user with passport                       |
| 5   | GET    | /whoami               | Return json of authenticated user                     |
| 6   | GET    | /logout               | Logout user using passport                            |
| 7   | GET    | /dashboard            | Render dashboard page for admin                       |
| 8   | GET    | /delete/:uuid         | Delete a user through dashboard page                  |
| 9   | GET    | /game                 | Render RPS Game page                                  |
| 10  | POST   | /histories            | Add game result (score) to history                    |
| 11  | GET    | /leaderboard/vscomp   | Render leaderboard of top 5 player in vs comp match   |
| 12  | GET    | /leaderboard/vsplayer | Render leaderboard of top 5 player in vs player match |
| 13  | GET    | /                     | Render home page                                      |
| 14  | GET    | /profile/:uuid        | Render profile page of a user                         |
| 15  | GET    | /update/:uuid         | Render update page of a user                          |
| 16  | POST   | /update/:uuid         | Post the updated user data to database                |

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Sedana Yoga - [@cok_yoga](https://twitter.com/Cok_Yoga)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[table-association]: public/images/table-association.png
[dashboard]: public/images/dashboard.png
[profile-page]: public/images/profile-page.png
[signin-page]: public/images/signin-page.png
[signup-page]: public/images/signup-page.png
[update-user-page]: public/images/update-user-page.png
[leaderboard]: public/images/leaderboard.png
