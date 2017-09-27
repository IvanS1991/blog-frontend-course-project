import * as requester from 'requester';

const headers = {
  'X-Auth-Key': localStorage.getItem('authKey'),
};

class Data {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  post(data) {
    return requester.postJson(this.baseUrl, {
      headers,
      data,
    });
  }
}

class UsersData extends Data {
  constructor(baseUrl) {
    super(baseUrl);
  }
}

class PostsData extends Data {
  constructor(baseUrl) {
    super(baseUrl);
  }

  getByCategory(category, page) {
    const url = `${this.baseUrl}/${category}/${page}`;
    return requester.getJson(url);
  }

  getById(id) {
    const url = `${this.baseUrl}/${id}`;
    return requester.getJson(url);
  }
}

class CommentsData extends Data {
  constructor(baseUrl) {
    super(baseUrl);
  }
}

const usersData = new UsersData('/users');
const postsData = new PostsData('/posts');
const commentsData = new CommentsData('/comments');

export {
  usersData,
  postsData,
  commentsData,
};
