function MainController(FilmsService) {
  this.myFilms = [];
  FilmsService.getMyFilms().forEach(e => {
    e.then(s => {
      this.myFilms.push(s.data);
    })
  });
  this.remove = (id) => {
    this.myFilms = this.myFilms.filter(f => f.imdbID !== id);
    FilmsService.removeFilm(id);
  }
}

app.controller('MainController', MainController);