import './assets/styles/main.scss';

import angular from 'angular';
import 'angular-ui-router';
import 'angular-messages';

import accordion from 'angular-ui-bootstrap/src/accordion';
import datepicker from 'angular-ui-bootstrap/src/datepicker';
import dropdown from 'angular-ui-bootstrap/src/dropdown';


import routerConfig from './app.routes';

import ComponentsModule from './components/components.module';
import ContainersModule from './containers/containers.module';

import 'assets/uui/css/uui-all.css';

angular
    .module('lunchTimer', [
        'ui.router',
        'ngMessages',
        accordion,
        datepicker,
        dropdown,
        ComponentsModule,
        ContainersModule
    ])
    .config(routerConfig)
    .name;
