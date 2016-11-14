import angular       from 'angular';
import MenuListComponent from './menu-list.component';

let menuListModule = angular.module('menuList', [])
    .component('menuList', MenuListComponent);

export default menuListModule;
