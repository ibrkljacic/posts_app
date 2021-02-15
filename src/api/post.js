import { api } from '~/services';

export async function getPosts() {
  const posts = await api.get('/posts?_embed=comments');
  const users = await api.get('/users');

  return posts.map((post) => ({
    ...post,
    user: users.find((user) => user.id === post.userId),
  }));
}

export async function getPost(id) {
  const post = await api.get(`/posts/${id}?_embed=comments`);
  const users = await api.get('/users');

  return {
    ...post,
    user: users.find((user) => user.id === post.userId),
  };
}
