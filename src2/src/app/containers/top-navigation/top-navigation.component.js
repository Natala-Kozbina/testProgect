import controller from './top-navigation.controller.js';
import './top-navigation.scss';
import template from './top-navigation.html';

const TopNavigationComponent = {
    bindings: {
        menuShowed: '=',
        toggleMenu: '&'
    },
    controller: controller,
    template
};

export default TopNavigationComponent;