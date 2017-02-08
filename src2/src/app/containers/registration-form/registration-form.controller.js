class RegistrationFormController {
    constructor($state, registrationService, $log) {
        'ngInject';
        this.state = $state;
        this.registrationService = registrationService;
        this.$log = $log;
    }

    checkRegistration (ngModel) {

        this.user = {
            'email' : ngModel.email,
            'password' : ngModel.password,
            'confirmPassword' : ngModel.confirmPassword,
            'name' : ngModel.name,
            'surname' : ngModel.surname,
            'phone' : ngModel.phone
        }

        this.registrationService
            .checkRegistrForm(this.user)
            .then(this.registrationHandler.bind(this))
            .catch(this.errorHandler.bind(this));
    }
    checkConfirmPassword(ngModel) {
        return ngModel.password === ngModel.confirmPassword;
    }
    registrationHandler (data) {
        if(data.sucsess === this.user.email) {
            this.state.go('confirm-registration');
        } else {
            return this.errorRegistration = true;
        }
    }
    errorHandler (error) {
        this.$log.error(error);
    }
    redirect () {
      this.state.go('signin');
    }
    checkData () {
        return this.errorRegistration = false;
    }

    checkPassword (ctrl) {
    ctrl.uppercase = !!ctrl.password.match(/[A-Z]/g);
    ctrl.lovercase = !!ctrl.password.match(/[a-z]/g);
    ctrl.number = !!ctrl.password.match(/[0-9]/g);
    ctrl.length = ctrl.password.length > 7;
    ctrl.passwordCheck = (ctrl.uppercase && ctrl.lovercase && ctrl.number && ctrl.length);
    }

    focusData (input, state) {
        switch(input) {
            case 'focusEmail': this.focusEmail = state;
             break;
            case 'focusName': this.focusName = state;
             break;
            case 'focusPassword': this.focusPassword = state;
             break;
            case 'focusConfirmPassword': this.focusConfirmPassword = state;
             break;
            case 'focusSurname': this.focusSurname = state;
             break;
            case 'focusPhone': this.focusPhone = state;
             break;
        }
    }
}

export default RegistrationFormController;
