// on page load create the dropdown options
createLanguageList();

// translate button
$('#submit-to-google').on('click', function (e) {
    e.preventDefault();

    const message = $("#send-this-to-google").val();
    const language = $('#languages :selected').val();
    sendDataToGoogle(message, language);
});

// twitter button
$('#submit-to-twitter').on('click', function (e) {
    e.preventDefault();

    const query = $('#send-this-to-twitter').val();

    sendTweetToServer({message: query});
});


function sendTweetToServer(data) {
    $.post('/api/tweet', data, function(results){
        console.log(results); // should give back the success message that is in our api-routes file
    });
}

function createLanguageList() {
    const select = $('#languages');
    for (let i = 0; i < languages.length; i++) {
        const option = $('<option>').attr('value', languages[i].alpha2).text(languages[i].English);
        select.append(option);
    }
}











function sendDataToGoogle(message, language) {
    $.get("https://www.googleapis.com/language/translate/v2", {
        key: "AIzaSyCe5_WNvxTHErxHMaTg1Yi7yOEQcQHRnSg",
        source: "en",
        target: language,
        q: message
    }).then(function (data) {
        console.log(data);
        $("#send-this-to-twitter").val(data.data.translations[0].translatedText);
    });
}