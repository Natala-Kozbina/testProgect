class LoginFormController {
    constructor ($state, loginService, $log) {
        "ngInject";
        this.state = $state;
        this.loginService = loginService;
        this.$log = $log;
    }

    checkSignIn (ngModel) {
        let email = ngModel.email;
        let password = ngModel.password;

        let data = {
            'email' : email,
            'password' : password
        }
        console.log(data);
        this.loginHandler(data);

        // this.loginService
        //     .checkLoginForm(email, password)
        //     .then(this.loginHandler.bind(this))
        //     .catch(this.errorHandler.bind(this));
        // console.log('ngModel => ',  ngModel);
    }

    loginHandler(data) {

        let user = {
            'email' : "www@www.www",
            'password' : "1Wwwwww"
        };

        if(user.email === data.email && user.password === data.password) {
            this.state.go('home');
        } else {
            return this.error = true;
        }
    }

    errorHandler(error) {
        this.$log.error(error);
    }

    redirect(state) {
        this.state.go(state);
    }
}

LoginFormController.$inject = ['$state', 'loginService', '$log'];

export default LoginFormController;
