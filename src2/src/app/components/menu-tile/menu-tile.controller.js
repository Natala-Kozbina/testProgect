class MenuTileController {
    constructor() {
        "ngInject";

        this.displayDish = true;
        this.displayComments = false;
    }
    showComments () {
        // this.displayDish = false;
        // this.displayComments = true;
    }
    showDish () {
        // this.displayDish = true;
        // this.displayComments = false;
    }
}

export default MenuTileController;
