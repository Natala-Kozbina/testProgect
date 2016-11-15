class ConfirmPassword {
    constructor() {
        this.restrict = 'A';
        this.require = 'ngModel';
    }
    link($scope, $element, $attrs, $ctrl) {

        $ctrl.$validators.confirmPassword = function(modelValue) {

            let firstPassword = $attrs.firstPassword;
            return modelValue === firstPassword;

        }
    }
}

export default ConfirmPassword;
