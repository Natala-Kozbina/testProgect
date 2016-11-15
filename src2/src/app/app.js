import './assets/styles/main.scss';

import angular from 'angular';
import 'angular-ui-router';
import 'angular-messages';
import 'angular-animate';

import routerConfig from './app.routes';

import ComponentsModule from './components/components.module';
import ContainersModule from './containers/containers.module';

import 'assets/uui/css/uui-all.css';

import CONSTS from './app.consts.js';

// console.log('APP.CONSTS - ', CONSTS);

angular
    .module('lunchTimer', [
        'ui.router',
        'ngMessages',
        'ngAnimate',
        ComponentsModule,
        ContainersModule
    ])
    .constant('CONSTS', CONSTS)
    .config(routerConfig)
    .name;
