class Email {
    constructor() {
        this.restrict = 'A';
        this.require = 'ngModel';
    }

    link($scope, $element, $attrs, $ctrl) {

        $ctrl.$validators.email = function(modelValue) {
            var reg = /^[a-z]{1,}@[a-z]{1,}\.[a-z]{2,}$/;
            if (reg.test(modelValue)) {
                return true;
            } else {
                return false;
            }
        }
    }
}

export default Email;
