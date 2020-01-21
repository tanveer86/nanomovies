$("#singleMovieDiv").hide();


$("#singleMovie").click(function(){
    var movieInput = $("#movieInput").val();
    $.ajax({
      url: "http://www.omdbapi.com/?apikey=b19722fa&t=" + movieInput,
    })
    .done(function(movieData) {

        if(movieData.Response == 'True'){
            $("#singleMovieDiv").show();

            if(movieData.Poster.length < 4){
                $("#singleMovieImage").attr("src", "https://www.alpineflorist.co.nz/wp-content/uploads/2018/07/image-coming-soon.jpg");
            }else {
                $("#singleMovieImage").attr("src", movieData.Poster);
            }

            $("#singleMovieTitle").text("Movie Name: " + movieData.Title);

        }else {
            alert("Sorry no Movies Found, Please Check Spelling");
        }
    });
});