class LoginFormController {
    constructor ($state, loginService, $log) {
        "ngInject";
        this.state = $state;
        this.loginService = loginService;
        this.$log = $log;
        this.user = {};
    }

    checkSignIn (ngModel) {
        let email = ngModel.email;
        let password = ngModel.password;

        this.user = {
            'email' : email,
            'password' : password
        }

        this.loginHandler();

        // this.loginService
        //     .checkLoginForm(user)
        //     .then(this.loginHandler.bind(this))
        //     .catch(this.errorHandler.bind(this));
        // console.log('ngModel => ',  ngModel);
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
