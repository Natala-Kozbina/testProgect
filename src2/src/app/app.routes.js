function routeConfig ($stateProvider, $urlRouterProvider, $locationProvider) {
    'ngInject';

    $stateProvider
        .state('signin', {
            url: '/',
            template: require('./screens/signin.html')
        })
        .state('home', {
            url: '/home',
            template: require('./screens/home.html')
        });

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
}

module.exports = routeConfig;
