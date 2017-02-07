class AccordionController {
    constructor(supplierService, loginService) {
        "ngInject";
        // this.oneAtATime = true;
        this.items = null;
        this.supplierService = supplierService;
        this.loginService = loginService;
    }

    $onInit() {
        this.menuShowed = false;
        this.items = this.supplierService.getSuppliers();
        this.visibility = this.loginService.getVisibility();
    }

    toggleMenu() {
        this.menuShowed = !this.menuShowed;
    }
}

export default AccordionController;
