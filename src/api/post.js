import { api } from '~/services';

export async function getPosts() {
  const posts = await api.get('/posts');
  const users = await api.get('/users');
  const comments = await api.get('/comments');

  return posts.map((post) => ({
    ...post,
    user: users.find((user) => user.id === post.userId),
    comments: comments.filter((comment) => comment.postId === post.id),
  }));
}

export async function getPost(id) {
  const post = await api.get(`/posts/${id}`);
  const users = await api.get('/users');
  const comments = await api.get('/comments');

  return {
    ...post,
    user: users.find((user) => user.id === post.userId),
    comments: comments.filter((comment) => comment.postId === post.id),
  };
}
