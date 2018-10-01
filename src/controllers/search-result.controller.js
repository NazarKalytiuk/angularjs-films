function SearchResultController(FilmsService, $routeParams) {
  this.error = undefined;
  FilmsService.searchFilm($routeParams.id).then(res => {
    if (res.data.Error) {
      this.error = res.data.Error;
    } else {
      this.films = res.data.Search;
      this.error = undefined;
    }
  })

  this.save = (id) => {
    FilmsService.saveFilm(id);
  }
}

app.controller('SearchResultController', SearchResultController);