class LoginFormController {
    constructor ($state, loginService, $log) {
        "ngInject";
        this.state = $state;
        this.loginService = loginService;
        this.$log = $log;
        this.user = {};

    }

    $onInit() {
        this.loginService.removeUser();
    }

    checkSignIn (ngModel) {
        const email = ngModel.email;
        const password = ngModel.password;

        this.user = {
            email,
            password
        }
        console.log(this.user);
        this.loginService
            .checkLoginForm(this.user)
            .then(this.loginHandler.bind(this))
            .catch(this.errorHandler.bind(this));
    }

    loginHandler() {
        console.log(this.user);
        let userEmail = this.user.email;
        let userPassword = this.user.password
        let userFromServer = {
                "name": "Natala",
                "password": userPassword,
                "surname": "Admin",
                "email": userEmail,
                "phone": "+38088-888-88-88",
                "visibility": true
            };

        this.loginService.setUser(userFromServer);

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
        return this.errorEmail = false;
    }

    changePassword() {
        return this.errorPassword = false;
    }
}

// LoginFormController.$inject = ['$state', 'loginService', '$log'];

export default LoginFormController;
