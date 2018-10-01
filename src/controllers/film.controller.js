function FilmController(FilmsService, $routeParams) {
  this.film = {};
  FilmsService.getFilm($routeParams.id).then(e => {
    this.film = e.data;
    console.log(this.film);
  })

  this.save = (id) => {
    FilmsService.saveFilm(id);
  }
}

app.controller('FilmController', FilmController);