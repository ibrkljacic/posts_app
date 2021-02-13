import { api } from '~/services';

export async function getPosts() {
  return await api.get('/posts');
}
