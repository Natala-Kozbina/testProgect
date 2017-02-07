class LoginService {
    constructor ($http, CONSTS, $q) {
        this.$http = $http;
        this.consts = CONSTS;
        this.$q = $q;
        this.visibility = false;
    }

    checkLoginForm(user) {
        const url =  this.consts.URLS.LOGIN;
        console.log('checkLoginForm => URL - ',url);
        user = {
            'email' : "www@www.www",
            'password' : "xxx"
        };
        this.visibility = true;
        return this.$q.resolve(user);
    }

    getVisibility () {
        return this.visibility;
    }
}

LoginService.$inject = ['$http', 'CONSTS', '$q'];

export default LoginService;
