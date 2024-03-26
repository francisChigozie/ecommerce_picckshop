import axios from 'axios';

const setAuthToken = token => {
 if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
    localStorage.setItem('token', token);
  } else {
    //delete axios.defaults.headers.common['x-auth-token'] 
    localStorage.removeItem('token');
  }  
};

export default setAuthToken;


/**
 * let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  req.headers['x-forwarded-proto'] === 'https'
 */