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

    


    $("#translateBtn").on("click", function () {
        let queryPhrase = $("#query-input").val();
        //queryPhrase = "My name is Logan";
        let sourceLang; // add this in later
        let targetLang = $("select#language-iso-list>option").attr("selected", true);
        targetLang = "fr";

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
    
                }, "json").fail(function (jqXHR, textStatus, errorThrown) {
                alert("error :" + errorThrown);
            });
        }

        translate();
    });




    





});



// translate();