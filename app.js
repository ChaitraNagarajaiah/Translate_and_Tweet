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
                    localStorage.setItem("message", message);
                    sessionStorage.setItem("message", message);
                    let href = baseURL + "text=" + message;
                    $("#twitter-button").attr("href", href);

    
                }, "json").fail(function (jqXHR, textStatus, errorThrown) {
                alert("error :" + errorThrown);
            });
        }
    
    });

  
   $("#twitter-button").on("click", function(){
       let message = $("#query-output").text();
       let box = `<div class="box">
       <article class="media">
         <div class="media-left">
           <figure class="image is-64x64">
             <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
           </figure>
         </div>
         <div class="media-content">
           <div class="content">
             <p>
               <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
               <br>
               ${message}
             </p>
           </div> 
           <nav class="level is-mobile">
             <div class="level-left">
               <a class="level-item" aria-label="reply">
                 <span class="icon is-small">
                   <i class="fas fa-reply" aria-hidden="true"></i>
                 </span>
               </a>
               <a class="level-item" aria-label="retweet">
                 <span class="icon is-small">
                   <i class="fas fa-retweet" aria-hidden="true"></i>
                 </span>
               </a>
               <a class="level-item" aria-label="like">
                 <span class="icon is-small">
                   <i class="fas fa-heart" aria-hidden="true"></i>
                 </span>
               </a>
             </div>
           </nav>
         </div>
       </article>
       </div> `; 
       $("#feed").prepend(box);


   })



    




});



// translate();
