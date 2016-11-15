import angular from 'angular';
import ShoppingCartComponent from './shopping-cart.component.js';

const shoppingCartComponent = angular
    .module('shoppingCartComponent', [])
    .component('shoppingCart', ShoppingCartComponent)
    .name;

export default shoppingCartComponent;
