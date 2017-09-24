# Blog - Single page application
Simple single page app blog, where you can register, login, make posts and comments. You can also like other people's posts and comments.

# Purpose
Course project for Telerik Academy's Web Front-End Development course.

# Getting started
Clone the repository, then run:
```
npm install
npm start
```

To run **tests**:
```
npm test
```

To run **dev server**:
```
npm run dev-server
```

To run **build**:
```
npm run build
```

# API Endpoints
## Users
**POST /users - Register a new user**
```
{
  username:...,
  passHash:...,
  passHashRepeat:...
}
```
**PUT /users - Login**
```
{
  username:...,
  passHash:...
}
```

## Posts
**POST /posts - Create a new post**
```
{
  title:...,
  content:...
}
```
**PUT /posts - Rate a post**
```
{
  postId:...,
  value:...,
}
```
**GET /posts/:category/:page/:size - Get posts**

## Comments
**POST /comments - Create a new comment**
```
{
  threadId:...,
  content:...
}
```
**PUT /comments - Register a new user**
```
{
  threadId:...,
  postId:...,
  value:...
}
```

# Used technologies
**Backend**
* [Express](https://expressjs.com/)
* [MongoDB Node driver](https://mongodb.github.io/node-mongodb-native/)

**Client**

# Author
[Ivan Shtarbanov](https://telerikacademy.com/Users/IvanS1991) 
><ivan.shtarbanov1991@gmail.com>

# License
MIT