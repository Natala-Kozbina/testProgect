import angular from 'angular';
import HeaderAppComponent from './header.component.js';

const headerAppComponent = angular
    .module('headerAppComponent', [])
    .component('appHeader', HeaderAppComponent)
    .name;

export default headerAppComponent;
