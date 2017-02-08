class LoginFormController {
    constructor ($state, loginService, localStorageService, $log, CONSTS) {
        "ngInject";
        this.state = $state;
        this.loginService = loginService;
        this.localStorageService = localStorageService;
        this.$log = $log;
        this.user = {};
        this.consts = CONSTS;
    }

    $onInit() {
        this.localStorageService.removeUser();
    }

    checkSignIn (ngModel) {
        const email = ngModel.email;
        const password = ngModel.password;
        this.user = {
            email,
            password
        }
        this.loginService
            .checkLoginForm(this.user)
            .then(this.loginHandler.bind(this))
            .catch(this.errorHandler.bind(this));
    }

    loginHandler(data) {
        data ? this.userFromServer = data : this.userFromServer = this.consts.USER;

        if(this.userFromServer.email === this.user.email && this.userFromServer.password === this.user.password) {
            this.localStorageService.setUser(this.userFromServer);
            this.localStorageService.removeNewUser();
            this.state.go('home');
        } else if (this.userFromServer.email != this.user.email) {
            return this.errorEmail = true;
        } else {
            return this.errorPassword = true;
        }
    }

    errorHandler(error) {
        this.$log.error(error);
    }

    redirect() {
        this.state.go("registration");
    }

    changeEmail() {
        return this.errorEmail = false;
    }

    changePassword() {
        return this.errorPassword = false;
    }
}

export default LoginFormController;
