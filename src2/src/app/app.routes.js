function routeConfig ($stateProvider, $urlRouterProvider, $locationProvider) {
    'ngInject';

    $stateProvider
        .state('home', {
            url: '/',
            template: require('./screens/home.html')
        })
        .state('signin', {
            url: '/signin',
            template: require('./screens/signin.html')
        })
        .state('registration', {
            url: '/registration',
            template: require('./screens/signin.html')
        })
        .state('confirm-registration', {
            url: '/confirm-registration',
            template: require('./screens/signin.html')
        });

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
}

module.exports = routeConfig;
