export const API_URL = 'https://64db92b4593f57e435b127be.mockapi.io/api/v1';
export const SERVER_URL = 'http://localhost:8080';

export const validatorMap = {
  'email': {
    'validator': /^[A-Z]{1,}[a-z]{2,}$/
  },
  'password': {
    'validator': /^[A-Z]{1,}[a-z]{1,}\d{1,}/
  },
  'error': 'Please enter all required fields'
};