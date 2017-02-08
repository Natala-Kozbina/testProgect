import angular from 'angular';
import InStockController from './in-stock.component.js';

const inStockController = angular
    .module('inStockController', [])
    .component('inStock', InStockController)
    .name;

export default inStockController;
