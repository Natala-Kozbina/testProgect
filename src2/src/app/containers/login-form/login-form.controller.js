class LoginFormController {
    constructor ($state, loginService) {
        "ngInject";
        this.state = $state;
        this.loginService = loginService;
    }

    checkSignIn (ngModel) {
        let email = ngModel.email;
        let password = ngModel.password;

        this.loginService.checkLoginForm(email, password);
        console.log('ngModel => ',  ngModel);

    //   this.state.go(state);

    }

    redirect(state) {
        this.state.go(state);
    }
}

LoginFormController.$inject = ['$state', 'loginService'];

export default LoginFormController;
