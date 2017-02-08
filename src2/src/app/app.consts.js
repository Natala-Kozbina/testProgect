
    'use strict';
    const baseUrl = 'http://localhost:9000/dinner/rest';
    const login = '/login';
    const logout = '/logout';
    const registration = '/registration';

    const URLS = {
        BASE_URL: baseUrl,
        LOGIN: baseUrl + login,
        LOGOUT: baseUrl + logout,
        REGISTRATION: baseUrl + registration
    };

    const INPUT = {
    MINLENGTH: 1,
    MAXLENGTH: 100,
};

module.exports = {
    URLS,
    INPUT
};
