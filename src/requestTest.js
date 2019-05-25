var request = require('request');
const __API_KEY__ = '';
var movie = "";
var readline = require('readline');


var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Digite o nome de um filme:\n", function(movie) {
    var resp = movie;
   // console.log("\nSua resposta '" + resp + "' foi grava com sucesso numa variável inútil");
    leitor.close();
try{
request('http://www.omdbapi.com/?apikey=' + __API_KEY__ + '&type=movie&t=' + movie, function (error, response, body) {
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  var parsedMovie = JSON.parse(body);
  console.log(parsedMovie);
  console.log("Title / Título: " + parsedMovie['Title']);
  console.log("Year / Ano: " + parsedMovie['Year']);
  console.log("Released / Lançamento: " + parsedMovie['Released']);
  console.log("Director / Diretor: " + parsedMovie['Director']);
  console.log("Genre / Genero: " + parsedMovie['Genre']);
  console.log("Actors / Atores: " + parsedMovie['Actors']);
  
  if(parsedMovie['imbdRating'] == "N/A"){
    console.log("Rating / Nota: Sem nota no momento.");  
  } else {
    console.log("Rating / Nota: " + parsedMovie['imdbRating']);
  }
  if(parsedMovie['imbdVotes'] == "undefined"){
    console.log("Votes / Votos: Sem votos no momento.");  
  } else {
    console.log("Votes / Votos: " + parsedMovie['imdbVotes']);
  }

});
}
catch{
  console.log('error:', error); // Print the error if one occurred
}

});

