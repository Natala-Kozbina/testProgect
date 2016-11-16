class RegistrationFormController {
    constructor($state) {
        "ngInject";
        this.state = $state;
    }
    redirect () {
      this.state.go("signin");
    }
}

export default RegistrationFormController;
