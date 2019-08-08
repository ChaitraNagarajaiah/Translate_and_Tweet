var myToken = window.location.search;

const rawCallback = "https://lrminer.github.io/translate-tweet-app";

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
};

if (window.location.search.match("oauth_verifier") && !sessionStorage.getItem("accessToken")) {
    tokenExists();
} else if (!sessionStorage.getItem("accessToken")) {
    requestToken();
};