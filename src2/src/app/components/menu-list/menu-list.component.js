import template from './menu-list.html';
import controller from './menu-list.controller';
import './menu-list.scss';

let menuListComponent = {
    bindings: {
      supplier:'<',
      showDish:'<'
    },
    template,
    controller
};

export default menuListComponent;
