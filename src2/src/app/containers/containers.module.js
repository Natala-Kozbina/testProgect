import angular from 'angular';
import SupplierModule from './supplier/supplier.module';

const ContainersModule = angular
    .module('lunchTimer.containers', [
        SupplierModule.name
]);

export default ContainersModule.name;
