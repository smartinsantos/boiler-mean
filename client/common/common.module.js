import {ExampleService} from './services/example.service';

const CommonModule = angular.module('CommonModule', [
    //dependencies here
])
.factory('ExampleService', ExampleService);

export {CommonModule};
