$('#twitter-button').on('click', function() {
    // Initialize with your OAuth.io app public key
    OAuth.initialize('HwAr2OtSxRgEEnO2-JnYjsuA3tc');
    // Use popup for OAuth
    OAuth.popup('twitter').then(twitter => {
      console.log('twitter:', twitter);
      // Prompts 'welcome' message with User's email on successful login
      // #me() is a convenient method to retrieve user data without requiring you
      // to know which OAuth provider url to call
      twitter.me().then(data => {
        console.log('data:', data);
        alert('Twitter says your email is:' + data.email + ".\nView browser 'Console Log' for more details");
      });
      // Retrieves user data from OAuth provider by using #get() and
      // OAuth provider url    
      twitter.get('/1.1/account/verify_credentials.json?include_email=true').then(data => {
        console.log('self data:', data);
      })    
    });
  })