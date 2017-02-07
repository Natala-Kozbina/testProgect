class LoginService {
    constructor ($http, CONSTS, $q, $window) {
        'ngInject';
        this.$http = $http;
        this.consts = CONSTS;
        this.$q = $q;
        this.visibility = false;
        this.localStorage = $window.localStorage;
    }

    checkLoginForm(user) {
        const url =  this.consts.URLS.LOGIN;
        console.log('checkLoginForm => URL - ',url);
        user = this.getUser('user');
        this.visibility = true;
        return this.$q.resolve(user);
    }

    setUser (userFromServer) {
        console.log('userFromServer -> ', userFromServer);
        this.localStorage.setItem('user', JSON.stringify(userFromServer));
        // this.localStorage.setItem('userName', userFromServer.name);
        // this.localStorage.setItem('userVisibility', userFromServer.userVisibility);
    }

    getUser () {
        let parse = this.localStorage.getItem('user')
        console.log('parse -> ', parse);
    }

    getVisibility () {
        const userVisibility = this.getUser();
        console.log('userVisibility -> ', userVisibility);
        return this.visibility;
    }

    removeUser () {
        let user = {};
        this.localStorage.setItem('user', user);
    }
}

export default LoginService;
