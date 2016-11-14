import angular from 'angular';
import LogoComponent from './logo.component.js';

const logoComponent = angular
    .module('logoComponent', [])
    .component('logo', LogoComponent)
    .name;

export default logoComponent;
