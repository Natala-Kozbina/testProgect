import controller from './header.controller.js';
import './header.scss';
import '../../assets/uui/fonts/font-awesome/css/font-awesome.min.css';

const HeaderAppComponent = {
    bindings: {},
    controller: controller,
    template: require('./header.html')
};

export default HeaderAppComponent;