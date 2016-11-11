import controller from './header-dropdown.controller.js';
import './header-dropdown.scss';
import '../../assets/uui/fonts/font-awesome/css/font-awesome.min.css';

const HeaderDropdownComponent = {
    bindings: {
        title: '@',
        href: '@'
    },
    controller: controller,
    template: require('./header-dropdown.html'),
    transclude: true
};

export default HeaderDropdownComponent;