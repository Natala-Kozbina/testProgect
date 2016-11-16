class LoginService {
    constructor ($http, CONSTS) {
        'ngIngect';
        this.$http = $http;
        this.const = CONSTS;
    }

    checkLoginForm(email, password) {
        let url =  this.const.URLS.LOGIN;
        console.log('checkSignIn => URL - ', url);
        return this.$http
            .get(url, {email: email, password: password})
    }
}
LoginService.$inject = ['$http', 'CONSTS'];

export default LoginService;
