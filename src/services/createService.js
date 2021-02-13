import axios from 'axios';

import { getAccessToken, removeAccessToken } from '~/auth';

import configuration from './configuration';

export default function createService() {
  const instance = axios.create({
    baseURL: configuration.baseUrl,
  });

  instance.interceptors.request.use(
    async (config) => {
      config.headers.common = {
        ...config.headers.common,
        'X-Auth': getAccessToken(),
      };

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    async (response) => {
      const { config, data } = response;

      return config.fullResponse ? response : data;
    },
    (error) => {
      if (error.response) {
        const { status } = error.response;
        if (status === 403) {
          removeAccessToken();
          window.location.reload();
        }
      }
      return Promise.reject(error);
    }
  );

  return {
    get: instance.get,
    post: instance.post,
    delete: instance.delete,
    put: instance.put,
    patch: instance.patch,
  };
}
