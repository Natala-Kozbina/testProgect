import angular       from 'angular';

import LoginFormComponent from './login-form.component.js';
import LoginService from './login-form.service.js';
import LocalStorageService from '../../services/localStorage.service.js';
import email from '../../directives/form-validator/form-validator.module.js';

let LoginFormModule = angular
    .module('loginForm', [email])
    .component('loginForm', LoginFormComponent)
    .service('loginService', LoginService)
    .service('localStorageService', LocalStorageService)
    .name;

export default LoginFormModule;
