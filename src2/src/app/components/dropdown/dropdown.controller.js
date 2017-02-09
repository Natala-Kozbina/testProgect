class DropdownController {
    constructor() {}

    $onInit() {
    }

    chooseColor (color) {
        if (color) {
            this.needColor = false;
            this.selectColor = color.color;
        } else {
            this.needColor = true;
        }
    }
}

export default DropdownController;
