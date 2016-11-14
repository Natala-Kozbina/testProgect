import angular from 'angular';

import appHeader from './header/header.module.js';
import logo from './logo/logo.module';
import topNavigation from './top-navigation/top-navigation.module';
import menuToggle from './menu-toggle/menu-toggle.module';
import shoppingCart from './shopping-cart/shopping-cart.module';
import balance from './balance/balance.module';
import datepicker from './datepicker/datepicker.module';

import LoginComponent from './login/login.module';
import LoginFormComponent from './login-form/login-form.module';
import RegistrationFormComponent from './registration-form/registration-form.module';

const ContainersModule = angular
    .module('lunchTimer.containers', [
        appHeader,
        logo,
        topNavigation,
        menuToggle,
        shoppingCart,
        balance,
        datepicker,
        LoginComponent.name,
        LoginFormComponent.name,
        RegistrationFormComponent.name
    ]);

export default ContainersModule.name;
