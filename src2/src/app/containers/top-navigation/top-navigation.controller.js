class TopNavigationController {
    constructor() {
    }

    $onInit() {
        this.show = false;
        this.testTitle = 'testTitle';
        this.userPhoto = 'https://static.cdn.epam.com/avatar/82bbd81fa6738c0f721c778a46e8a1d6.jpg';
        this.userMenu = [
            {
                title: 'Admin',
                href: 'Admin'
            },
            {
                title: 'Profile',
                href: 'Profile'
            },
            {
                title: 'Order history',
                href: 'Order'
            },
            {
                title: 'Settings',
                href: 'Settings'
            },
            {
                title: 'Logout',
                href: 'Logout'
            }
        ]
    }

    showMenu() {
        this.show = true;
    }

    hideMenu() {
        this.show = false;
    }
}

export default TopNavigationController;