import React from 'react'
import axios from 'axios';
const Axios = axios.create({
  baseURL: 'https://safe-shore-72480.herokuapp.com/api/',
  timeout: 1000,
  // headers: {
  //   'Accept': 'application/vnd.GitHub.v3+json',
  //   //'Authorization': 'token <your-token-here> -- https://docs.GitHub.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token'
  // }
});


export default Axios