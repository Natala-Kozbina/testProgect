import angular from 'angular';
import DropdownComponent from './dropdown.component.js';
import dropdown from 'angular-ui-bootstrap/src/dropdown';


const dropdownComponent = angular
    .module('dropdownComponent', [
        dropdown
    ])
    .component('dropdown', DropdownComponent)
    .name;

export default dropdownComponent;
