const Password = () => ({
    restrict: 'A',
    require: 'ngModel',
    link($scope, $element, $attrs, $ctrl) {

        $ctrl.$validators.password = modelValue => {
            var reg = /(?=^.{8,}$)(?=.*\d)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
            return !!reg.test(modelValue)
        }
    }

})

export default Password;
