# Project 1
## Project Outline
### Objectives
* Use at least 2 APIs
* Use AJAX to pull data
* Use at least one new library or technology that we haven't discussed
* Create a polished front end/UI
* Meet good quality coding standards (indentation, scoping, naming, etc.)
* Do NOT use alerts, confirms, or prompts (look into _modals_)
* Incorporate some sort of repeating element
* Use Bootstrap or an alternative CSS framework
* Deploy your site to GitHub pages
* Include user input validation
* Prepare a formal, 10-minute presentation featuring:
    * Overall concept of application
    * Your motivation for developing the application
    * Your design process
    * Technologies used (and brief description of how they work)
    * Demonstration of the app's functionality
    * Directions for future development

## Process
### Our Initial Idea
* Login to twitter
* Take in an input message, source language, and target language
* Send to Google Translate API using AJAX get method
* Get translated response from Google 
* Take new message and post a status (tweet) to your twitter  

### Roadblocks we encountered
* When we initially chose our APIs we did not know exactly how hard using the twitter API would be...
* Google Cloud Platform was fairly straightforward to use. In order to use Google's numerous APIs, all you have to do is sign up for a FREE trial on their Google Cloud Platform and get an API key.
* Reasons why Google was awesome:
    * They give you $300.00 trial credit to spend... absolutely free.
    * When you sign up for a free trial, you have to put in a credit card... But, they will not charge you after your whopping 12-month trial has come to an end.
    * They have a great interface for keeping track of how much you are actually using their API. Allows you to see:
        * Number of requests
        * Errors 
        * Billing (we never got even close to the billing range for the amount of data we were requesting)
    * Great documentation
* Twitter Roadblocks:
    * OAuth
    * Getting API key took emailing back and forth in order to get developer access
    * Getting triple-legged authorization
    * Extremely vague documentation
    * Our Team: coders with limited backend experience... 
        * Requiring frontend solutions!
        * Thank you so much to our instructors for all of your help with obtaining authorization for this application

### Bulma Implementation
#### Features Used: 
* Box
* Card
* Buttons
* Container
* Textarea
* Input
* Class structure
    * is-*
### Our Icebox (Ideas we hope to implement in the future):
* Convert hashtags without having to modify them later in the textarea element
* Add a backend xD