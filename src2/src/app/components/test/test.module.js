import angular       from 'angular';
import TestComponent from './test.component';

let testModule = angular.module('test', [])
    .component('test', TestComponent);

export default testModule;
