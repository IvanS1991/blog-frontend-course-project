import * as requester from 'requester';

const getHeaders = () => {
  return {
    'X-Auth-Key': localStorage.getItem('authKey'),
  };
};

class Data {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  post(data) {
    return requester.postJson(this.baseUrl, {
      headers: getHeaders(),
      data,
    });
  }

  put(data) {
    return requester.putJson(this.baseUrl, {
      headers: getHeaders(),
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

  getByCategory(category, type, page) {
    let url = `${this.baseUrl}/${type}`;
    if (type !== 'all') {
      url += `/${category}/${page}`;
    } else {
      url += `/${page}`;
    }
    return requester.getJson(url);
  }

  getById(id) {
    const url = `${this.baseUrl}/${id}`;
    return requester.getJson(url);
  }

  getCategories() {
    const url = `${this.baseUrl}/categories`;
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
