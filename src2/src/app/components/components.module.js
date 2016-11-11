import angular from 'angular';
import TestModule from './test/test.module';
import appFooter from './footer/footer.module';
import appHeader from './header/header.module';
import datePickerDropdown from './date-picker-dropdown/date-picker-dropdown.module';
import headerDropdown from './header-dropdown/header-dropdown.module';



const ComponentsModule = angular
    .module('lunchTimer.components', [
        TestModule.name,
        appFooter,
        appHeader,
        datePickerDropdown,
        headerDropdown
    ]);

export default ComponentsModule.name;
