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
  username:string,
  passHash:string,
  passHashRepeat:string
}
```
**PUT /users - Login**
```
{
  username:string,
  passHash:string
}
```

## Posts
**POST /posts - Create a new post**
```
{
  title:string,
  content:string,
  category:string
}
```
**PUT /posts - Rate a post**
```
{
  username:string,
  postId:string,
  value:+1/-1,
}
```
**GET /posts/:postId - Get one post**
**GET /posts/:category/:page/:size - Get list of posts**

## Comments
**POST /comments - Create a new comment**
```
{
  threadId:string,
  content:string
}
```
**PUT /comments - Register a new user**
```
{
  username:string,
  threadId:string,
  postId:string,
  value:+1/-1
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