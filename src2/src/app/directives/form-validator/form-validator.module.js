import angular from 'angular';

import textOnly from './text-only.directive.js';
import email from './email.directive.js';
import phone from './phone.directive.js';
import password from './password.directive.js';
import confirmPassword from './confirmPassword.directive.js';


let ValidatorModule = angular
    .module('fromValidations', [])
    .directive('textOnly', () => new  textOnly)
    .directive('email', () => new  email)
    .directive('phone', () => new  phone)
    .directive('password', () => new  password)
    .directive('confirmPassword', () => new  confirmPassword)
    .name;

export default ValidatorModule;
