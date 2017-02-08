const TextOnly = (CONSTS) => ({
    restrict: 'A',
    require: 'ngModel',
    link($scope, $element, $attrs, $ctrl) {

        $ctrl.$validators.textOnly = modelValue => {
            let minLength = CONSTS.INPUT.MINLENGTH;
            let maxLength = CONSTS.INPUT.MAXLENGTH;
            let reg = new RegExp("^[A-ZА-Яa-zа-я][A-ZА-Яa-zа-я ']{" + minLength + "," + maxLength + "}$");
            return !!reg.test(modelValue)
        };
    }
})

TextOnly.$inject = ['CONSTS'];

export default TextOnly;
