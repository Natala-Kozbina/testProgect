import controller from './dropdown.controller.js';
import './dropdown.scss';
import '../../assets/uui/fonts/font-awesome/css/font-awesome.min.css';
import template from './dropdown.html';

const DropdownComponent = {
    bindings: {
        menuTitle: '<',
        menuList: '<'
    },
    controller,
    template
};

export default DropdownComponent;
