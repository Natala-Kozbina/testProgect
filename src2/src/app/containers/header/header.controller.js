class HeaderController {
    constructor() {
    }

    $onInit() {
        this.menuShowed = false;
    }

    toggleMenu() {
        this.menuShowed = !this.menuShowed;
    }
}

export default HeaderController;
