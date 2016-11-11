class AccordionController {
    constructor(supplierService) {
        "ngInject";
        this.menu = null;
        this.supplierService = supplierService;

    }

    $onInit() {        
        console.log(this.supplier.name);
    }
}

AccordionController.$inject = ['supplierService'];

export default AccordionController;
