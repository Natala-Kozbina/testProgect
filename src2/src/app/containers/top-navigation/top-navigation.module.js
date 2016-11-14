import angular from 'angular';
import TopNavigationComponent from './top-navigation.component.js';

const topNavigationComponent = angular
    .module('topNavigationComponent', [])
    .component('topNavigation', TopNavigationComponent)
    .name;

export default topNavigationComponent;
