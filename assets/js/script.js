var movieAPI = "http://movie-database-alternative.p.rapidapi.com"

$(".search-btn").on('click', function (event) {
    var searchField = $(".search-input").val();
    localStorage.setItem("Search", searchField);
searchTerm = localStorage.getItem("Seach")
var uriComponent = searchField.replace(/ /g, "%20")
console.log(uriComponent)

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://movie-database-alternative.p.rapidapi.com" + "/?s=" + uriComponent + "&r=json&page=1",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "3336923f29msh6e1151a1f7d3df5p17b980jsna4e22f0b6a1a",
		"X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});
})