import angular from 'angular';
import FooterAppComponent from './footer.componet';

const footerAppComponent = angular
    .module('footerAppComponent', [])
    .component('appFooter', FooterAppComponent)
    .name;

export default footerAppComponent;
