//css dependencies, thanks the the styles webpack loader it gets added as a
// <style> tag in the head by default but can be changed
import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'toastr/build/toastr.min.css';
import './assets/styles/main.css';

//importing libraries for global use
import 'bootstrap';

// importing angular dependencies for injection
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngMessages from 'angular-messages';
import ngCookies from 'angular-cookies';
import uiBootstrap from 'angular-ui-bootstrap';

// Project files
import {MainModule} from './components/main/main.module';
import {CommonModule} from './common/common.module';

angular.module('boiler-mean', [
  'ui.router',
  'ngAnimate',
  'ngMessages',
  'ngCookies',
  'ui.bootstrap',

  // Modules
  MainModule.name,
  CommonModule.name
])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
    $stateProvider
    //Main
    .state('main', {
      url: '/',
      template: require('./components/main/main.tmpl.html'),
      controller: 'MainController as mainCtrl',
      params:{userId:null}
    });

});
