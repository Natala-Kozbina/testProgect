import angular       from 'angular';
import AccordionComponent from './accordion.component';
import SupplierService from '../../services/supplier.service';

let accordionModule = angular.module('accordion', [])
    .component('accordion', AccordionComponent)
    .service('supplierService', SupplierService);

export default accordionModule;
