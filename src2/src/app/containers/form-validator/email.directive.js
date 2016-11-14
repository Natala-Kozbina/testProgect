// import angular from 'angular';

class Email {
    constructor() {
        this.restrict = 'A';
        this.require = 'ngModel';
    // this.$timeout = $timeout;
    }
    // restrict: 'A',
    // require: 'ngModel',// что б у элемента к которорму применяетмя деректова была модель
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
