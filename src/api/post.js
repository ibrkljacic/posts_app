import { api } from '~/services';

export async function getPosts() {
  const posts = await api.get('/posts');
  const users = await api.get('/users');

  const postsComplete = Promise.all(
    posts.map((post) =>
      getPostComments(post.id).then((comments) => ({
        ...post,
        comments,
        user: users.find((user) => user.id === post.userId),
      }))
    )
  );

  return postsComplete;
}

export async function getPost(id) {
  return await api.get(`/posts/${id}`);
}

export async function getPostComments(id) {
  return await api.get(`/posts/${id}/comments`);
}
