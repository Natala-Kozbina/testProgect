import template from './menu-list.html';
import controller from './menu-list.controller';
import './menu-list.scss';

let menuListComponent = {
    bindings: {
      supplier:'<',
      showDish:'<',
      needColor: '=',
      selectColor: '='
    },
    template,
    controller
};

export default menuListComponent;
