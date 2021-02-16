let configuration;

if (process.env.NODE_ENV === 'test') {
  configuration = {};
} else {
  configuration = {
    baseUrl: process.env.REACT_APP_BASE_URL,
  };
}

export default configuration;
