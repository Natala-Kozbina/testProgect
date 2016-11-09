import angular from 'angular';
import TestModule from './test/test.module';

const ComponentsModule = angular
    .module('lunchTimer.components', [
        TestModule.name
    ]);

export default ComponentsModule.name;
