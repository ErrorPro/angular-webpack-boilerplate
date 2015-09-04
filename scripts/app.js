import angular from 'angular'
import ngRoute from 'angular-route'
import testCtr from './controllers/main'
import config from './config'

const myModule = angular.module('myModule', [
  'ngRoute'
])
.config(config)
.controller('testCtrl', testCtr)

export default myModule
