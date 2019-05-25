document.getElementById('formulario').addEventListener('submit', pesquisarFilme);

function pesquisarFilme(e) {
  var filmePesquisa = document.getElementById('pesquisar').value;
  buscarFilme(filmePesquisa);
  e.preventDefault();
}

function buscarFilme(filmePesquisa) {
  // Make a request for a user with a given ID
  axios.get('http://www.omdbapi.com/?apikey=18cb7f29&type=movie&t=' + filmePesquisa)
    .then(function (response) {
      // handle success
      console.log(response);
      var filmes = response.data;
      var mostrarFilmes = '';

      for (var i = 0; i < filmes.length; i++) {
        mostrarFilmes += `
          <div class="col-sm-6 col-md-4">
          <div class="thumbnail">
            <img src="${filmes[i].Poster}" class="img-thumbnail">
            <h4>${filmes[i].Title}</h4>
            <p><a href="#" class="btn btn primary" role="button">Ver Detalhes</a></p>
          </div>
          </div>
        `;
      }

document.getElementById("filmes").innerHTML = mostrarFilmes;

    })
    .catch(function (error) {
      // handle error
      console.log(error);
      //alert("Movie not found!")
    })
    .finally(function () {
      // always executed
    });
}