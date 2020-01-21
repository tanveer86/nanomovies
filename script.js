$("#singleMovieDiv").hide();
var moviesArr = [];

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

function Moviestore(movieposter, movietitle){
    this.movieposter = movieposter;
    this.movietitle = movietitle;
}

$("#singleMovieFavorite").click(function(){
    $("#moviesAddedList").empty();
    var movieImage = $("#singleMovieImage").attr("src");
    var movieName = $("#singleMovieTitle").text();

    var addToList = new Moviestore(movieImage, movieName);
            
    moviesArr.push(addToList);
    $("#singleMovieDiv").hide(1000);
    addWishList(moviesArr);
})

function addWishList(movieList){

    movieList.forEach(function(addedMovieData){
        
        $("#moviesAddedList").append("<div class='each-movie'><img src='" + addedMovieData.movieposter + "' alt='" + addedMovieData.movietitle + "' title='" + addedMovieData.movietitle + "'></div>");
    }) 
}