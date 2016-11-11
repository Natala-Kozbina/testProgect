// import angular from 'angular';

class Phone {
    constructor() {
        this.restrict = 'A';
        this.require = 'ngModel';
    // this.$timeout = $timeout;
    }
    // restrict: 'A',
    // require: 'ngModel',// что б у элемента к которорму применяетмя деректова была модель
    link($scope, $element, $attrs, $ctrl) {

        $ctrl.$validators.phone = function(modelValue, viewValue) {
            var reg = /^\+38-[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
                if (reg.test(modelValue)) {
                        return true;
                    } else {
                        return false;
                    }
                }
    }
}

export default Phone;
