import template from './menu-tile-label.html';
import controller from './menu-tile-label.controller';
import './menu-tile-label.scss';

let menuTileLabelComponent = {
    bindings: {
      dishData: '<',
      labelType: '<'
    },
    template,
    controller
};

export default menuTileLabelComponent;
