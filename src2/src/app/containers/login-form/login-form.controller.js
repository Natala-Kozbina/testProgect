class LoginFormController {
    constructor ($state, loginService) {
        "ngInject";
        this.state = $state;
        this.loginService = loginService;
    }

    checkSignIn (ngModel) {
        // console.log('this.loginService - ', this.loginService);
        let email = ngModel.email;
        let password = ngModel.password;
        this.loginService.checkLoginForm(email, password);

    //   this.state.go(state);

    }
}

LoginFormController.$inject = ['$state', 'loginService'];

export default LoginFormController;
