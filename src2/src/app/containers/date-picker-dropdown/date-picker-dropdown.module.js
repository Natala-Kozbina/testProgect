import angular from 'angular';
import DatePickerDropdownController from './date-picker-dropdown.component.js';
import dropdown from 'angular-ui-bootstrap/src/dropdown';

const datePickerDropdownComponent = angular
    .module('datePickerDropdownComponent', [
        dropdown
    ])
    .component('datePickerDropdown', DatePickerDropdownController)
    .name;

export default datePickerDropdownComponent;