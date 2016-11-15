class Password {
    constructor() {
        this.restrict = 'A';
        this.require = 'ngModel';
    }
    link($scope, $element, $attrs, $ctrl) {

        $ctrl.$validators.password = function(modelValue) {
            var reg = /(?=^.{8,}$)(?=.*\d)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
            if (reg.test(modelValue)) {
                return true;
            } else {
                return false;
            }
        }
    }
}

export default Password;
