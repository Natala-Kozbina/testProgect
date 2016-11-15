
    'use strict';
    var baseUrl = 'http://localhost:9000/dinner/rest';
    var login = '/login';
    var logout = '/logout';
    var currentUser = '/current-user';

    var URLS = {
        BASE_URL: baseUrl,
        LOGIN: baseUrl + login,
        LOGOUT: baseUrl + logout,
        CURRENT_USER: baseUrl + currentUser
    };



module.exports = {
    URLS: URLS
};
