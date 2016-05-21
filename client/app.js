'use strict';

//css dependencies, thanks the the styles webpack loader it gets added as a
// <style> tag in the head by default but can be changed
require('normalize.css/normalize.css');
require('bootstrap/dist/css/bootstrap.min.css');
require('toastr/build/toastr.min.css');
require('./assets/styles/main.css');

//importing libraries for global use
window.$ = window.jQuery = require('jquery');
require('bootstrap');
window.toastr = require('toastr');
window.moment = require('moment');

// importing angular dependencies for injection
const angular = require ('angular');
const uiRouter = require ('angular-ui-router');
const ngAnimate = require ('angular-animate');
const ngMessages = require('angular-messages');
const ngCookies = require('angular-cookies');
const uiBootstrap = require('angular-ui-bootstrap');

window.app = angular.module('boiler-mean', [
  'ui.router',
  'ngAnimate',
  'ngMessages',
  'ngCookies',
  'ui.bootstrap',
])

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
    $stateProvider
  //Main
    .state('main', {
      url: '/',
      template: require('./components/main/main.tmpl.html'),
      controller: 'MainCtrl',
      params:{userId:null}
    })

    
})

//require common resources models & factories
require('./common/services');
require('./common/models');

//require component controllers
require('./components/main');


