import angular       from 'angular';
import AccordionComponent from './accordion.component';
import SupplierService from '../../services/supplier.service';
import accord from 'angular-ui-bootstrap/src/accordion';

let accordionModule = angular.module('accordion', [accord])
    .component('accordion', AccordionComponent)
    .service('supplierService', SupplierService);

export default accordionModule;
