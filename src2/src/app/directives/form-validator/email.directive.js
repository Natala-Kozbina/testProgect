const Email = () =>  ({
    restrict: 'A',
    require: 'ngModel',
    link($scope, $element, $attrs, $ctrl) {

        $ctrl.$validators.email = modelValue => {
            var reg = /^[a-z0-9._\/-]{1,}@[a-z]{1,}\.[a-z]{1,}$/;
             return !!reg.test(modelValue)
        }
    }
})

export default Email;
