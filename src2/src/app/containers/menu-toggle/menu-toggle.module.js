import angular from 'angular';
import MenuToggleComponent from './menu-toggle.component.js';

const menuToggleComponent = angular
    .module('menuToggleComponent', [])
    .component('menuToggle', MenuToggleComponent)
    .name;

export default menuToggleComponent;
