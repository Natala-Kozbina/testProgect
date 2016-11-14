import angular from 'angular';

import textOnly from './text-only.directive.js';
import email from './email.directive.js';
import phone from './phone.directive.js';


let ValidatorModule = angular
    .module('fromValidations', [])
    .directive('textOnly', () => new  textOnly)
    .directive('email', () => new  email)
    .directive('phone', () => new  phone)
    .name;


export default ValidatorModule;
