import angular       from 'angular';
import MenuTileLabelComponent from './menu-tile-label.component';

let menuTileLabelModule = angular.module('menuTileLabel', [])
    .component('menuTileLabel', MenuTileLabelComponent);

export default menuTileLabelModule;
