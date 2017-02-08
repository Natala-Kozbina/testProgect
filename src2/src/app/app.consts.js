
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

    const USER = {
        "name": "Natala",
        "password": "xxx",
        
        "surname": "Admin",
        "email": "www@www.www",
        "phone": "+38088-888-88-88",
        "visibility": true
    };

module.exports = {
    URLS,
    INPUT,
    USER
};
