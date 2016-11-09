function routeConfig ($stateProvider, $urlRouterProvider) {
    'ngInject';

    $stateProvider
        .state('home', {
            url: '/',
            template: require('./screens/home.html')
        })
        .state('signin', {
            url: '/signin',
            template: require('./screens/signin.html')
        });

    $urlRouterProvider.otherwise('/');
}

module.exports = routeConfig;
