import angular from 'angular';
import BalanceController from './balance.component.js';

const balanceController = angular
    .module('balanceController', [])
    .component('balance', BalanceController)
    .name;

export default balanceController;
