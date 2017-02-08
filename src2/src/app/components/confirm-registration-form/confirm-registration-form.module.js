import angular       from 'angular';
import ConfirmRegistrationComponent from './confirm-registration-form.component.js';

const ConfirmRegistrationModule = angular
    .module('confirmRegistrationForm', [])
    .component('confirmRegistrationForm', ConfirmRegistrationComponent)
    .name;

export default ConfirmRegistrationModule;
