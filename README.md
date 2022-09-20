# To do App

Todo app with MERN stack(MongoDB, Express, React, Node)

### Home Page

!["Screenshot Home"](https://github.com/cheungjoshua/mern-todo/blob/main/client/doc/Screen%20Shot%202022-09-20%20at%2014.02.43.png?raw=true)

### Edit Todo Modal

!["Screenshot Modal"](https://github.com/cheungjoshua/mern-todo/blob/main/client/doc/Screen%20Shot%202022-09-20%20at%2014.03.01.png?raw=true)

## App feature

- User able to edit the todo description or complete stage.
- User able to search the todo list by using input specific words.

## Getting Started

- Install all dependencies (using the `npm install` command).
- Run the backend server using the `npm run start` command.
- Run the client server using the `npm start` command.

## App work flow

In the beginning of the App start. It will do a API call to the server with useEffect. Once server received API request. Server will use Mongoose to do the query request to Cloud MongoDB Atlas database. If success, server will receive todo list from database in JSON format and send response to front end. Front end will save the todo list data by using React useState and useContent which allow data passing around in each components easier. When user add a new todo item, the app will run the similar process as above and render it at the client side.

## What I learn from this APP

In this project build. I getting more comfort to using useContext. Learned the basic idea of using Mongoose and the structure of the MongoDB. In this App, I tried style the whole layout without using CSS, and practice using React-bootstrap to create component.

### Dependency

- React.js
- React Bootstrap
- Axios
- Node.js
- Express
- Morgan
- Nodemon
- Mongoose
