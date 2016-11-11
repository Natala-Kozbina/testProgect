import angular       from 'angular';
import LoginFormComponent from './login-form.component.js';

let LoginFormModule = angular
    .module('loginForm', [])
    .component('loginForm', LoginFormComponent);

export default LoginFormModule;
