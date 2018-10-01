function FilmsService($http) {
  this.getFilm = (id) => {
    return $http.get(`http://www.omdbapi.com/?i=${id}&apikey=26576a39`);
  }
  this.searchFilm = (param) => {
    return $http.get(`http://www.omdbapi.com/?s=${param}&apikey=26576a39`);
  }
  this.saveFilm = (id) => {
    let films = JSON.parse(localStorage.getItem('films'));
    if (!films) {
      films = [];
    }
    let old = films.indexOf(id);
    if (old !== -1) {
      films.splice(old, 1)
    }
    films.push(id);
    localStorage.setItem('films', JSON.stringify(films));
  }
  this.getMyFilms = () => {
    let films = JSON.parse(localStorage.getItem('films'));
    console.log(films);
    let result = [];
    if (films) {
      films.forEach(e => {
        result.push($http.get(`http://www.omdbapi.com/?i=${e}&apikey=26576a39`));
        console.log(result);
        result.forEach(res => {
          res.then(s => console.log(s))
        })
      })
    }
    return result;
  }
  this.removeFilm = (id) => {
    let films = JSON.parse(localStorage.getItem('films'));
    let old = films.indexOf(id);
    if (old !== -1) {
      films.splice(old, 1)
    }
    localStorage.setItem('films', JSON.stringify(films));
  }
}

app.service('FilmsService', FilmsService);