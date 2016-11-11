import angular       from 'angular';
import SupplierContainer from './supplier.container';
import SupplierService from '../../services/supplier.service';

let supplierModule = angular.module('supplier', [])
    .component('supplier', SupplierContainer)
    .service('supplierService', SupplierService);

export default supplierModule;
