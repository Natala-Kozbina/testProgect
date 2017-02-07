class LoginFormController {
    constructor ($state, loginService, $log) {
        "ngInject";
        this.state = $state;
        this.loginService = loginService;
        this.$log = $log;
        this.user = {};
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

    loginHandler() {
        console.log(this.user);

        let userFromServer = {
            'email' : "www@www.www",
            'password' : "xxx"
        };

        if(userFromServer.email === this.user.email && userFromServer.password === this.user.password) {
            this.state.go('home');
        } else if (userFromServer.email != this.user.email) {
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
        console.log('changeEmail');
        return this.errorEmail = false;
    }

    changePassword() {
        console.log('changePassword');
        return this.errorPassword = false;
    }
}

LoginFormController.$inject = ['$state', 'loginService', '$log'];

export default LoginFormController;
