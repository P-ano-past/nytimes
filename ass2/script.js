$(document).ready(function() {

    $("#search-btn").on("click", function() {
        let apiKey = "A5DhF5hUaPCtWA1OdppKQssE9SsPWAXI";
        const queryItem = ""
        const filter = ""

        const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + queryItem + "&fq="+ filter + "&api-key=" + apiKey
        
        $.ajax({
          url: queryURL,
          method: "GET"
        })
          .then(function(response) {
            const results = response.data;
            

            
            console.log(response.response.docs[0])
            console.log(data)
        })

        function getArticles(queryItem) {
          $("#search-btn").on("click", function(){
            let searchTerm = $("#search-term")
            searchTerm.val(queryItem)


          })
        }

        function clearArt(){
          $("#clear-btn").on('click', function(){
            $("#card-body").empty();
          })
        }

    })
})



    



