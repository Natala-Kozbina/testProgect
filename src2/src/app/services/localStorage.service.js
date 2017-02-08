class LocalStorageService {
    constructor ($window) {
        'ngInject';
        this.localStorage = $window.localStorage;
    }

    setUser (userFromServer) {
        this.localStorage.setItem('user', JSON.stringify(userFromServer));
    }

    setNewUser (newUser) {
        this.localStorage.setItem('newUser', JSON.stringify(newUser));
    }

    getUser () {
        return JSON.parse(this.localStorage.getItem('user'));
    }

    getNewUser () {
        return JSON.parse(this.localStorage.getItem('newUser'));
    }

    removeNewUser () {
        this.localStorage.setItem('newUser', null);
    }

    removeUser () {
        this.localStorage.setItem('user', null);
    }
}

export default LocalStorageService;
