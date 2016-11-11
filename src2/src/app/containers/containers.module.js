import angular from 'angular';
import LoginComponent from './login/login.module';
import LoginFormComponent from './login-form/login-form.module';
import RegistrationFormComponent from './registration-form/registration-form.module';

const ContainerModule = angular
    .module('lunchTimer.containers', [
        LoginComponent.name,
        LoginFormComponent.name,
        RegistrationFormComponent.name,
]);

export default ContainerModule.name;
