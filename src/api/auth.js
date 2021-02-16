import { sleep } from '.';

export async function login(data) {
  // mock API call
  await sleep(300);
  if (data.email !== process.env.REACT_APP_EMAIL || data.password !== process.env.REACT_APP_PASSWORD) {
    throw new Error();
  }
  return { accessToken: process.env.REACT_APP_ACCESS_TOKEN };
}

export async function logout() {
  // mock API call
  await sleep(300);
}
