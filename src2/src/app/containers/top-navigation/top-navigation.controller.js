class TopNavigationController {
    constructor($state, loginService) {
        "ngInject";

        this.state = $state;
        this.loginService = loginService;
        // this.localStorage = $window.localStorage;
    }

    $onInit() {
        this.show = false;
        this.visibility = this.loginService.getVisibility();
        console.log('this.visibility -> ', this.visibility);
        this.testTitle = 'testTitle';
        this.userPhoto = 'https://static.cdn.epam.com/avatar/82bbd81fa6738c0f721c778a46e8a1d6.jpg';
        // this.userMenu = this.localStorage.getItem('user');
        // console.log('this.userMenu -> ', this.userMenu);
    }

    showMenu() {
        this.show = true;
    }

    hideMenu() {
        this.show = false;
    }
}

export default TopNavigationController;
