class ConfirmRegistrationController {
    constructor($state, loginService) {
        'ngInject';
        this.state = $state;
        this.loginService = loginService;
    }

    gotoSignin () {
        this.state.go('signin');
    }
}

export default ConfirmRegistrationController;
