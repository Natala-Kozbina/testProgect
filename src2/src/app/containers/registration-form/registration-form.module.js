import angular from 'angular';

import RegistrationFormComponent from './registration-form.component.js';
import textOnly from '../../directives/form-validator/form-validator.module.js';

console.log(textOnly);


let RegistrationFormModule = angular
    .module('registrationForm', [textOnly])
    .component('registrationForm', RegistrationFormComponent);

export default RegistrationFormModule
