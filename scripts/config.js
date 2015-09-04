import home from '../view/home.html'

const config = ($routeProvider) => {
  $routeProvider.
    when('/home', {
      templateUrl: home,
      controller: 'testCtrl'
    })
}

config.$inject = ['$routeProvider']

export default config
