import template from './menu-tile.html';
import controller from './menu-tile.controller';
import './menu-tile.scss';

let menuTileComponent = {
    bindings: {
      dishData: '<'
    },
    template,
    controller
};

export default menuTileComponent;
