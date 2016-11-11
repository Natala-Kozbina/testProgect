import angular from 'angular';
import TestModule from './test/test.module';
import MenuListModule from './menu-list/menu-list.module';
import MenuTileModule from './menu-tile/menu-tile.module';

const ComponentsModule = angular
    .module('lunchTimer.components', [
        TestModule.name,
        MenuListModule.name,
        MenuTileModule.name
    ]);

export default ComponentsModule.name;
