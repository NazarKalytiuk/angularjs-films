function router($routeProvider) {
  $routeProvider
  .when('/search/:id', {
    templateUrl: 'src/views/search-result.html',
    controller: 'SearchResultController',
    controllerAs: 'searchR'
  })
  .when('/film/:id', {
    templateUrl: 'src/views/film.html',
    controller: 'FilmController',
    controllerAs: 'film'
  })
  .when('/', {
    templateUrl: 'src/views/home.html',
    controller: 'MainController',
    controllerAs: 'main'
  })
  .otherwise({
    templateUrl: 'src/views/404.html'
  })
}

app.config(router)