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
}

export default RegistrationFormController;
