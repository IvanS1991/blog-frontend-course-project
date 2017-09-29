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
**GET /posts/categories - Get all existing categories and their subcategories**
**GET /posts/:postId - Get one post**
**GET /posts/all/:page - Get a page of posts in all existing categories and subcategories**
**GET /posts/:type/:category/:page - Get a page of posts in a main/sub category**

## Comments
**POST /comments - Create a new comment**
```
{
  postId:string,
  content:string
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