export * from './auth';
export * from './post';

export function sleep(ms = 1500) {
  return new Promise((resolve) => setTimeout(resolve, Math.random() * ms));
}
