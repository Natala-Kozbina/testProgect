class TopNavigationController {
    constructor($state, loginService) {
        "ngInject";

        this.state = $state;
        this.loginService = loginService;
        this.loginService = loginService;
    }

    $onInit() {
        this.show = false;
        this.visibility = this.loginService.getVisibility();
        console.log('this.visibility -> ', this.visibility);
        this.testTitle = 'testTitle';
        this.userMenu = this.loginService.getUser('user');
        console.log('this.userMenu -> ', this.userMenu);
    }

    showMenu() {
        this.show = true;
    }

    hideMenu() {
        this.show = false;
    }
}

export default TopNavigationController;
