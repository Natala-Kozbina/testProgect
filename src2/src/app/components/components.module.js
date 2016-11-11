import angular from 'angular';
import TestModule from './test/test.module';
import AccordionModule from './accordion/accordion.module';

const ComponentsModule = angular
    .module('lunchTimer.components', [
        TestModule.name,
        AccordionModule.name
    ]);

export default ComponentsModule.name;
