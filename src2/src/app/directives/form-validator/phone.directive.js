class Phone {
    constructor() {
        this.restrict = 'A';
        this.require = 'ngModel';
    }
    link($scope, $element, $attrs, $ctrl) {

        $ctrl.$validators.phone = function(modelValue) {
            var reg = /^\+380[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/;
            if (reg.test(modelValue)) {
                return true;
            } else {
                return false;
            }
        }
    }
}

export default Phone;
