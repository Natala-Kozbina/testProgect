class RegistrationService {
    constructor ($http, CONSTS, $q) {
        'ngInject';
        this.$http = $http;
        this.consts = CONSTS;
        this.$q = $q;
    }

    checkRegistrForm(user) {
        let url =  this.consts.URLS.REGISTRATION;
        console.log('checkRegistrForm  url -> ', url);
        let existingUserEmail = this.consts.USER.email;
        user = {
            'sucsess' : existingUserEmail,
            'error' : "error"
        };
        return this.$q.resolve(user);
    }
}

export default RegistrationService;
