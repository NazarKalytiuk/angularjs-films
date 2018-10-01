function HeaderController($location) {
  this.query = '';

  this.search = () => {
    if (this.query === '') {
      return
    } else {
      $location.path(`search/${this.query}`)
      this.query = '';
    }
  }
}

app.controller('HeaderController', HeaderController);