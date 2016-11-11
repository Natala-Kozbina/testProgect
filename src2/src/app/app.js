import './assets/styles/main.scss';

import angular from 'angular';
import 'angular-ui-router';
import 'angular-messages';
import 'angular-animate';

import routerConfig from './app.routes';

import ComponentsModule from './components/components.module';
import ContainersModule from './containers/containers.module';

import 'assets/uui/css/uui-all.css';

angular
    .module('lunchTimer', [
        'ui.router',
        'ngMessages',
        'ngAnimate',
        accordion,
        datepicker,
        ComponentsModule,
        ContainersModule
    ])
    .config(routerConfig)
    .name;
