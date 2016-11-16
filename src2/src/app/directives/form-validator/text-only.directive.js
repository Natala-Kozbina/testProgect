class TextOnly {
    constructor() {
        this.restrict = 'A';
        this.require = 'ngModel';
    }
    link($scope, $element, $attrs, $ctrl) {

        $ctrl.$validators.textOnly = function(modelValue) {
            var length = $attrs.minLength;
            var reg = new RegExp("^[A-ZА-Яa-zа-я][a-zа-я]{" + length + ",}$");
            if (reg.test(modelValue)) {
                return true;
            } else {
                return false;
            }
        };
    }
}

export default TextOnly;
