class AccordionController {
    constructor(supplierService, loginService) {
        "ngInject";
        this.items = null;
        this.supplierService = supplierService;
        this.loginService = loginService;
    }

    $onInit() {
        this.menuShowed = false;
        this.checkboxModel = false;
        this.showDish = this.checkboxModel;
        this.items = this.supplierService.getSuppliers();
        this.visibility = this.loginService.getVisibility();
        this.menuTitle = "Chose Color";
        this.menuList = [
            {title: 'hhjh'},
            {title: 'bbb'}];
    }

    toggleMenu () {
        this.menuShowed = !this.menuShowed;
    }

    choseInStockOnly (inStockOnly) {
        this.showDish = inStockOnly;
    }
}

export default AccordionController;
