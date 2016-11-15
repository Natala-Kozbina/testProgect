import angular from 'angular';
import DatepickerComponent from './datepicker.component.js';
import datepickerPopup from 'angular-ui-bootstrap/src/datepickerPopup';


const datepickerComponent = angular
    .module('datepickerComponent', [
        datepickerPopup
    ])
    .component('appDatepicker', DatepickerComponent)
    .name;

export default datepickerComponent;
