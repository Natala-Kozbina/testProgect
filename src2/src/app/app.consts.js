
    'use strict';
    var baseUrl = 'http://localhost:9000/dinner/rest';
    var login = '/login';
    var logout = '/logout';
    var registration = '/registration';

    var URLS = {
        BASE_URL: baseUrl,
        LOGIN: baseUrl + login,
        LOGOUT: baseUrl + logout,
        REGISTRATION: baseUrl + registration
    };



module.exports = {
    URLS: URLS
};
