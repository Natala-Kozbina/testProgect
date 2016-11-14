import controller from './menu-toggle.controller.js';
import './menu-toggle.scss';
import template from './menu-toggle.html';

const MenuToggleComponent = {
    bindings: {
        menuShowed: '=',
        toggleMenu: '&toggleMenu'
    },
    controller,
    template
};

export default MenuToggleComponent;