const endpoints = {
  test: {
    apiEndpoint: 'https://test.api.4all.com',
  },
  homologation: {
    apiEndpoint: 'https://homolog.api.4all.com',
  },
  production: {
    apiEndpoint: 'https://api.4all.com',
  },
};

let config = {}; // eslint-disable-line

switch (process.env.NODE_ENV) {
  case 'production':
    config = endpoints.prod;
    break;
  case 'homologation':
    config = endpoints.homologation;
    break;
  default:
    config = endpoints.test;
}

export default config;
