import axios from 'axios';

const defaultOptions = {
  headers     : {},
  responseType: 'json'
};

const requestVerbs = {
  POST   : 'post',
  GET    : 'get',
  PUT    : 'put',
  OPTIONS: 'options',
  PATCH  : 'patch'
};

const errorCodes = {
  sessionLost: 100
};

export const request = (method, url, options) => {
  options = {
    ...defaultOptions,
    ...options
  };
  return new Promise((res, rej) => {
    axios
      .request({ url, method, ...options })
      .then(response => {
        res(response.data);
      })
      .catch(e => {
        rej(e);
      })
      .finally(() => {
        // Cleanup
      });
  });
};

export const postResults = (user, testData) => {
  return request(requestVerbs.POST, `/api/test/finish`, {
    data   : {user, testData}
  });
};

