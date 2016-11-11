import angular from 'angular';
import HeaderDropdownComponent from './header-dropdown.component.js';

const headerDropdownComponent = angular
    .module('headerDropdownComponent', [])
    .component('headerDropdown', HeaderDropdownComponent)
    .name;

export default headerDropdownComponent;