import { sleep } from '.';

export async function login(data) {
  // mock API call
  await sleep(200);
  if (data.username !== process.env.REACT_APP_USERNAME && data.password !== process.env.REACT_APP_PASSWORD) {
    throw new Error();
  }
  return { accessToken: process.env.REACT_APP_ACCESS_TOKEN };
}

export async function logout() {
  // mock API call
  await sleep(200);
}
