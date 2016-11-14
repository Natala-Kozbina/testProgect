class LoginFormController {
    constructor ($location) {
        "ngInject";
        this.location = $location;
    }

    redirect () {
      this.location.url('/home');
    }
}

export default LoginFormController;
