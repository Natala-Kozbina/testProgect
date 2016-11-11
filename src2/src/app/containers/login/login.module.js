import angular       from 'angular';
import LoginComponent from './login.component.js';

let LoginModule = angular
    .module('login', [])
    .component('login', LoginComponent);

export default LoginModule;
