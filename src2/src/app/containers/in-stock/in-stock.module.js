import angular from 'angular';
import BalanceController from './in-stock.component.js';

const balanceController = angular
    .module('balanceController', [])
    .component('balance', BalanceController)
    .name;

export default balanceController;
