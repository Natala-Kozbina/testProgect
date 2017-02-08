class LoginService {
    constructor ($http, CONSTS, $q, localStorageService) {
        'ngInject';
        this.$http = $http;
        this.consts = CONSTS;
        this.$q = $q;
        this.localStorageService = localStorageService;
    }

    checkLoginForm(user) {
        const url =  this.consts.URLS.LOGIN;
        console.log('checkLoginForm => URL - ',url);
        this.localStorageService.getNewUser('newUser') ?
            user = this.localStorageService.getNewUser('newUser') :
            user = this.localStorageService.getUser('user');
        return this.$q.resolve(user);
    }

    getVisibility () {
        const userVisibility = this.localStorageService.getUser();
        const newUserVisibility = this.localStorageService.getNewUser()
        if(newUserVisibility || userVisibility) {
            return true
        } else {
            return false;
        }
    }
}

export default LoginService;
