import angular       from 'angular';

import LoginFormComponent from './login-form.component.js';
import LoginService from './login-form.service.js';
import email from '../../directives/form-validator/form-validator.module.js';
// import CONSTS from '../../app.consts.js';

let LoginFormModule = angular
    // .module('loginForm', [email, CONSTS])
    .module('loginForm', [email])
    .component('loginForm', LoginFormComponent)
    .service('loginService', LoginService)
    .name;

export default LoginFormModule;
