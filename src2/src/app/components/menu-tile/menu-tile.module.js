import angular       from 'angular';
import MenuTileComponent from './menu-tile.component';

let menuTileModule = angular.module('menuTile', [])
    .component('menuTile', MenuTileComponent);

export default menuTileModule;
