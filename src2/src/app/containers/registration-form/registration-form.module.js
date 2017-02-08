import angular from 'angular';
import RegistrationFormComponent from './registration-form.component.js';
import RegistrationService from './registration-form.service.js';
import LocalStorageService from '../../services/localStorage.service.js';
import textOnly from '../../directives/form-validator/form-validator.module.js';

const RegistrationFormModule = angular
    .module('registrationForm', [textOnly])
    .component('registrationForm', RegistrationFormComponent)
    .service('registrationService', RegistrationService)
    .service('localStorageService', LocalStorageService)
    .name;

export default RegistrationFormModule
