const CryptoJS = require("crypto-js");

const rawCallback = "https://lrminer.github.io/Team-Purple-Project-1/";

const baseUrl = "https://api.twitter.com/oauth/request_token";
const method = "POST";


const headers = genAuthHeaders({
  reqMethod: method,
  baseUrl: baseUrl,
  callbackUrl: rawCallback,
  consumerKey: "JOSoBvyeu0sEhLjswFygUQVze",
  consumerSecret: "z0279qvCL5UV7XNEYSsaa2oZiQ6x9vFrjAmKPa77tp4IRoGkH0"
});

$.ajax({
  url: baseUrl,
  method: method,
  headers: headers
});

// https://api.twitter.com/oauth/authorize?oauth_token=XW69RgAAAAAA_Xs1AAABbFNCGdY