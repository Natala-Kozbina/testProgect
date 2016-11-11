import angular from 'angular';
import DatePickerDropdownController from './date-picker-dropdown.component.js';

const datePickerDropdownComponent = angular
    .module('datePickerDropdownComponent', [])
    .component('datePickerDropdown', DatePickerDropdownController)
    .name;

export default datePickerDropdownComponent;