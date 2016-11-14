// import angular from 'angular';

class TextOnly {
    constructor() {
        this.restrict = 'A';
        this.require = 'ngModel';
    // this.$timeout = $timeout;
    }
    // restrict: 'A',
    // require: 'ngModel',// что б у элемента к которорму применяетмя деректова была модель
    link($scope, $element, $attrs, $ctrl) {

        $ctrl.$validators.textOnly = function(modelValue, viewValue) {
            var length = $attrs.minLength;
            console.log('modelValue - ', modelValue);
            console.log('viewValue - ', viewValue);

            var reg = new RegExp("^[A-ZА-Я][a-zа-я]{" + length + ",}$");
            console.log('reg.test(modelValue) - ', reg.test(modelValue));

            if (reg.test(modelValue)) {
                console.log('true');
                    return true;
                } else {
                    console.log('false');
                    return false;
                }
        };
    }
}

export default TextOnly;
