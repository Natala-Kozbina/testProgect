class TopNavigationController {
    constructor($state, loginService, localStorageService) {
        "ngInject";

        this.state = $state;
        this.loginService = loginService;
        this.localStorageService = localStorageService;
    }

    $onInit() {
        this.show = false;
        this.visibility = this.loginService.getVisibility();
        this.testTitle = 'testTitle';
        if(this.localStorageService.getUser('user')) {
            this.userMenu = this.localStorageService.getUser('user');
        } else {
            this.userMenu = this.localStorageService.getNewUser('user');
        }
    }

    gotoRegistration () {
        this.state.go('registration');
    }

    showMenu() {
        this.show = true;
    }

    hideMenu() {
        this.show = false;
    }
}

export default TopNavigationController;
