var movieAPI = "http://movie-database-alternative.p.rapidapi.com"

$(".search-btn").on('click', function (event) {
$(".results").empty();
$(".selection-poster").empty();
$(".movie-info").empty();
$(".trailer").empty();
var searchField = $(".search-input").val();
localStorage.setItem("Search", searchField);
searchTerm = localStorage.getItem("Seach");
var uriComponent = searchField.replace(/ /g, "%20");
console.log(uriComponent)


const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://movie-database-alternative.p.rapidapi.com" + "/?s=" + uriComponent + "&r=json",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "3336923f29msh6e1151a1f7d3df5p17b980jsna4e22f0b6a1a",
		"X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
    for (var i=0; i<10; i++){
    var resultsArr = response.Search[i];
    // console.log(resultsArr.Title); //returns [0] of results

    var cardEl = $('<button>'); 
    var cardId = resultsArr.imdbID;
    cardEl.attr("class", "movie-card");
    cardEl.attr("id", cardId)
    

    var headingEl = $('<h2>');
    var movieTitle = resultsArr.Title;
    headingEl.attr("class", "heading");
    headingEl.text(movieTitle)

    var posterEl = $('<img>');
    var moviePoster = resultsArr.Poster;
    posterEl.attr("class", "poster");
    posterEl.attr("src",  moviePoster);

    var yearEl = $('<h3>');
    var movieYear = resultsArr.Year;
    yearEl.attr("class", "year");
    yearEl.text("(" + movieYear + ")")

    $(".results").append(cardEl);
    cardEl.append(posterEl);
    cardEl.append(headingEl);
    cardEl.append(yearEl);



    // console.log (movieTitle);
    // console.log (moviePoster);
    // console.log (movieYear);
    // console.log (movieId);

    }

    // displayResults(response)
$(".movie-card").on('click', function(event) {
    var imdbID = $(this).attr("id")
    localStorage.setItem("imdbID", imdbID);
    $(".selection-poster").empty();
    $(".movie-info").empty();
    $(".trailer").empty();
    
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://movie-database-alternative.p.rapidapi.com/?r=json&i=" + localStorage.getItem("imdbID"),
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": "3336923f29msh6e1151a1f7d3df5p17b980jsna4e22f0b6a1a",
            "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com"
        }
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);
// add selected movie poster image
        var selPosterEl = $("<img>");
        var selPosterUrl = response.Poster;
        selPosterEl.attr("class", "poster-img");
        selPosterEl.attr("src", selPosterUrl);
        $(".selection-poster").append(selPosterEl)
        ;

// add selected movie info 
        var selTitleEl = $('<h2>');
        var title = response.Title;
        selTitleEl.attr("class", "selTitle");
        selTitleEl.text(title)
        $(".movie-info").append(selTitleEl);


        var subtextEl = $("<div>");
        subtextEl.attr("class", "columns subtext");
        $(".movie-info").append(subtextEl);

        var selYearEl = $("<p>");
        var year = response.Year;
        selYearEl.attr("class", "column is-one-fifth selYear");
        selYearEl.text("(" + year + ")");
        $(".subtext").append(selYearEl);

        var selRatedEl = $('<p>');
        var rated = response.Rated;
        selRatedEl.attr("class", "column is-one-fifth selRated");
        selRatedEl.text(rated);
        $(".subtext").append(selRatedEl);

        var selRunTimeEl = $('<p>');
        var runTime = response.Runtime;
        selRunTimeEl.attr("class", "column is-one-fifth selRunTime");
        selRunTimeEl.text(runTime);
        $(".subtext").append(selRunTimeEl);

        var selPlotEl = $('<p>');
        var plot = response.Plot;
        selPlotEl.attr("class", "selPlot");
        selPlotEl.text(plot);
        $(".movie-info").append(selPlotEl);

        var selDirectorEl = $('<p>');
        var director = response.Director;
        selDirectorEl.attr("class", "selDirector");
        selDirectorEl.text("Director: " + director);
        $(".movie-info").append($("<br>")).append(selDirectorEl);
        
        var selWriterEl = $('<p>');
        var writer = response.Writer;
        selWriterEl.attr("class", "selWriter");
        selWriterEl.text("Writer: " + writer);
        $(".movie-info").append(selWriterEl);

        var selActorsEl = $('<p>');
        var actors = response.Actors;
        selActorsEl.attr("class", "selActor");
        selActorsEl.text("Actors: " + actors);
        $(".movie-info").append(selActorsEl);
        
    });
})

});


//  function displayResults(response) {
//     var movie = response.Search[0];
//     var movieDiv = $(".movie-card");
 

// var movieCard = movie.imdbID
// $("h1").text(movieCard).appendto(movieDiv);
// }

// get $(.heading) value
// convert to ytUri (so it has a "+" symbol between each word)
// run pull request with rootapi + ytUri + $(.year) + "trailer"
// 



})