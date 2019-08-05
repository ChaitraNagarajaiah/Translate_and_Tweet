$(document).ready(function () {
    ///ASK TA HOW TO REFERENCE A JSON FILE 

    for (let i = 0; i < languageIsoCodes.length; i++) {
        let list = $("#language-iso-list");
        let option = $("<option>");
        option.attr("iso-code", languageIsoCodes[i].alpha2);
      //  console.log(languageIsoCodes[i].alpha2);
        option.text(languageIsoCodes[i].English);
        list.append(option);

    }

    


    $("#translateBtn").on("click", function (event) {
        event.preventDefault();
        let queryPhrase = $("#query-input").val();
        //queryPhrase = "My name is Logan";
        let sourceLang; // add this in later
        let targetLang = $("#language-iso-list :selected").attr("iso-code");
        console.log(targetLang);
        //targetLang = "fr";
        
        translate();

        function translate() {


            $.get("https://www.googleapis.com/language/translate/v2", {
                    key: "AIzaSyCe5_WNvxTHErxHMaTg1Yi7yOEQcQHRnSg",
                    source: "en",
                    target: targetLang,
                    q: queryPhrase
                },
                function (response) {
                    console.log(response);
                    console.log(response.data.translations[0].translatedText);
                    


                    $("#query-output").html(response.data.translations[0].translatedText);
                    let baseURL="https://twitter.com/intent/tweet?";
                    let message = $("#query-output").html();
                    let href = baseURL + "text=" + message;
                    $("#twitter-button").attr("href", href);

    
                }, "json").fail(function (jqXHR, textStatus, errorThrown) {
                alert("error :" + errorThrown);
            });
        }
    
    });

  
   


    




});



// translate();