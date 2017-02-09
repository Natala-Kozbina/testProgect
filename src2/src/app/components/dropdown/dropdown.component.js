import controller from './dropdown.controller.js';
import './dropdown.scss';
import '../../assets/uui/fonts/font-awesome/css/font-awesome.min.css';
import template from './dropdown.html';

const DropdownComponent = {
    bindings: {
        menuTitle: '<',
        menuListObj: '<',
        needColor: '=',
        selectColor : '='
    },
    controller,
    template
};

export default DropdownComponent;
