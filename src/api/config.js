require('es6-promise').polyfill();
require('isomorphic-fetch');

export const API = "https://practiceapi.devmountain.com/api";

export const getHeaders = () => ({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const postHeaders = (payload) => ({
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(payload),
});

export const patchHeaders = (payload) => ({
  method: 'PATCH',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(payload),
});

export const putHeaders = (payload) => ({
  method: 'PUT',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(payload),
});

export const deleteHeaders = (payload) => ({
  method: 'DELETE',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(payload),
});

export const request = (url, header) => {
  return fetch(url, header).then(res => res.json());
};
