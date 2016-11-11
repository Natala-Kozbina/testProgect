import angular from 'angular';
import TestModule from './test/test.module';
import appFooter from './footer/footer.module';

const ComponentsModule = angular
    .module('lunchTimer.components', [
        TestModule.name,
        appFooter
    ]);

export default ComponentsModule.name;
