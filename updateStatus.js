var myToken = window.location.search;
var params;
var accessToken;
const rawCallback = "https://lrminer.github.io/Team-Purple-Project-1/";

const requestToken = function requestToken() {

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
        url: "https://cors-anywhere.herokuapp.com/" + baseUrl,
        method: method,
        headers: headers
    }).then(function (response) {
        console.log(response)
        params = new URLSearchParams(response);
        console.log(params.get("oauth_token"));
        $("header").append(`<a href="https://api.twitter.com/oauth/authorize?oauth_token=${params.get("oauth_token")}"><h1>Log in to Twitter</h1></a>`);
    })
};
//
const tokenExists = function tokenEx() {
    params = new URLSearchParams(window.location.search);
    console.log("exists");
    console.log(params);
    console.log(params.get("oauth_token"));
    const baseUrl = "https://api.twitter.com/oauth/access_token";
    const method = "POST";

    const headers = genAuthHeaders({
        reqMethod: method,
        baseUrl: baseUrl,
        consumerKey: "JOSoBvyeu0sEhLjswFygUQVze",
        consumerSecret: "z0279qvCL5UV7XNEYSsaa2oZiQ6x9vFrjAmKPa77tp4IRoGkH0",
        verifier: params.get("oauth_verifier"),
        oauthToken: params.get("oauth_token")
    });

    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/" + baseUrl,
        method: method,
        headers: headers
    }).then(function (response) {
        params = new URLSearchParams(window.location.search);
        console.log("status update function");
        console.log(response);
        accessToken=$("response.oauth_token");
        console.log(accessToken);
    });
        //status update
        // const statusUpdate= function statusUpdate() {
        

        //var params = new URLSearchParams(window.location.search);




        
};
const statusUpdate = function statusUpdate() {
    //var params = new URLSearchParams(window.location.search);
    console.log("existsagain");
    console.log(params);
    const baseUrl = "https://api.twitter.com/1.1/statuses/update.json?status=helloworld!";
    const method = "POST";
    const accessToken= params.get("oauth_token");
    console.log(accessToken);
    const headers = genAuthHeaders({
        reqMethod: method,
        baseUrl: baseUrl,
        consumerKey: "JOSoBvyeu0sEhLjswFygUQVze",
        //consumerSecret: "z0279qvCL5UV7XNEYSsaa2oZiQ6x9vFrjAmKPa77tp4IRoGkH0",
        oauthToken: accessToken

    })
    console.log("posted update");

    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/" + baseUrl,
        method: method,
        headers: headers
    }).then(function (response) {
        var params = new URLSearchParams(window.location.search);
        console.log(response);
        accessToken=response.oauth_token;
        console.log("status update function");

    })
}

$(document).ready(function(){
    $("#myBtn").click(function(){
      statusUpdate();
    });
  });

    if (window.location.search) {
        tokenExists();
    }else {
        requestToken();
    }