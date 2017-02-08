class AccordionController {
    constructor(supplierService, loginService) {
        "ngInject";
        this.items = null;
        this.supplierService = supplierService;
        this.loginService = loginService;
        this.showDish = true;
    }

    $onInit() {
        this.menuShowed = false;
        this.showDish = true;
        this.items = this.supplierService.getSuppliers();
        this.visibility = this.loginService.getVisibility();
    }

    toggleMenu () {
        this.menuShowed = !this.menuShowed;
    }

    choseInStockOnly (inStockOnly) {
        console.log('inStockOnly -> ', inStockOnly);
        this.showDish = !this.showDish;
        this.needStock = inStockOnly;
        this.supplierService.selectInStock(inStockOnly);
    }

}

export default AccordionController;
