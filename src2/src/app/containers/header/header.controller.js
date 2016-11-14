class HeaderController {
    constructor() {
    }

    $onInit() {
        this.show = false;
        this.testTitle = 'testTitle';
    }

    showMenu() {
        this.show = true;
    }

    hideMenu() {
        this.show = false;
    }
}

export default HeaderController;
