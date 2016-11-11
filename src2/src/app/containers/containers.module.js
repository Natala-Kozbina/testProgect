import angular from 'angular';
import appHeader from './header/header.module';
import datePickerDropdown from './date-picker-dropdown/date-picker-dropdown.module';

import LoginComponent from './login/login.module';
import LoginFormComponent from './login-form/login-form.module';
import RegistrationFormComponent from './registration-form/registration-form.module';

const ContainersModule = angular
    .module('lunchTimer.containers', [
        appHeader,
        datePickerDropdown,
        LoginComponent.name,
        LoginFormComponent.name,
        RegistrationFormComponent.name
    ]);

export default ContainersModule.name;
