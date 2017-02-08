import angular from 'angular';

import textOnly from './text-only.directive';
import email from './email.directive';
import phone from './phone.directive';
import password from './password.directive';

const ValidatorModule = angular
    .module('fromValidations', [])
    .directive('textOnly', textOnly)
    .directive('email', email)
    .directive('phone', phone)
    .directive('password', password)
    .name;

export default ValidatorModule;
