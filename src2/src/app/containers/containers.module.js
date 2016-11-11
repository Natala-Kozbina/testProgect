import angular from 'angular';
import appHeader from './header/header.module';
import datePickerDropdown from './date-picker-dropdown/date-picker-dropdown.module';


const ContainersModule = angular
    .module('lunchTimer.containers', [
        appHeader,
        datePickerDropdown
    ]);

export default ContainersModule.name;
