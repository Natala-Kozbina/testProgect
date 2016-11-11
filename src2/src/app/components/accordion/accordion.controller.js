class AccordionController {
    constructor(supplierService) {
        "ngInject";
        this.oneAtATime = true;
        this.items = null;
        this.supplierService = supplierService;

    }

    $onInit() {
        this.items = this.supplierService.getSuppliers();
    }

}

AccordionController.$inject = ['supplierService'];

export default AccordionController;
