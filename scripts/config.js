const config = ($routeProvider) => {
  $routeProvider.
    when('/home', {
      templateUrl: '../view/home.html',
      controller: 'testCtrl'
    })
}

config.$inject = ['$routeProvider']

export default config
