import template from './supplier.html';
import controller from './supplier.controller';

let supplierComponent = {
    bindings: {
        supplier: '<'
    },
    template,
    controller
};

export default supplierComponent;
