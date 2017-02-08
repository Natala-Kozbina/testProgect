const Phone = () => ({
    restrict: 'A',
    require: 'ngModel',
    link($scope, $element, $attrs, $ctrl) {

        $ctrl.$validators.phone = modelValue => {
            var reg = /^\+380[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/;
            return !!reg.test(modelValue)
        }
    }
})

export default Phone;
