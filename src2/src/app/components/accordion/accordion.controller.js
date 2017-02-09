class AccordionController {
    constructor(supplierService, loginService, CONSTS) {
        "ngInject";
        this.items = null;
        this.supplierService = supplierService;
        this.loginService = loginService;
        this.consts = CONSTS;
        this.needColor = true;
        this.selectColor = true;
    }

    $onInit() {
        this.menuShowed = false;
        this.checkboxModel = false;
        this.showDish = this.checkboxModel;
        this.items = this.supplierService.getSuppliers();
        this.visibility = this.loginService.getVisibility();
        this.menuTitle = "Choose Color";
        this.menuListObj = this.consts.COLOR.colors;
    }

    toggleMenu () {
        this.menuShowed = !this.menuShowed;
    }

    choseInStockOnly (inStockOnly) {
        this.showDish = inStockOnly;
    }
}

export default AccordionController;
