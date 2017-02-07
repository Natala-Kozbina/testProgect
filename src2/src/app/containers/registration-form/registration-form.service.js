class RegistrationService {
    constructor ($http, CONSTS, $q) {
        this.$http = $http;
        this.const = CONSTS;
        this.$q = $q;
    }

    checkRegistrForm(user) {
        let url =  this.const.URLS.REGISTRATION;
        console.log('checkRegistrForm => URL - ', url);

        user = {
            'sucsess' : 'www@www.www',
            'error' : "error"
        };
        return this.$q.resolve(user);
    }
}

RegistrationService.$inject = ['$http', 'CONSTS', '$q'];

export default RegistrationService;
