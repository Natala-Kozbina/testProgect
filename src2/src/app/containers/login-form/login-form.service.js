class LoginService {
    constructor ($http, $log, $state, CONSTS) {
        'ngIngect';
        this.$http = $http;
        this.const = CONSTS;
        this.$log = $log;
    }

    checkLoginForm(email, password) {
        let url =  this.const.URLS.LOGIN;
        console.log('checkSignIn => URL - ', url);
        return this.$http
            .get(url, {email: email, password: password})
            .then(this.gotoMenuPage.bind(this))
            .catch(this.errorHandler.bind(this))
    }

    gotoMenuPage() {
        this.state.go('home');
    }

    errorHandler(error) {
        // this.$log.error(error);
        alert('You wrote wrong dates, please try again')

    }

}
LoginService.$inject = ['$http', '$log', '$state', 'CONSTS'];

export default LoginService;
