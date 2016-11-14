class RegistrationFormController {
    constructor($state) {
        "ngInject";
        this.state = $state;
    }
    redirect (state) {
      this.state.go(state);
    }
}

export default RegistrationFormController;
