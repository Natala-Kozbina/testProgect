import angular from 'angular';
import AccordionModule from './accordion/accordion.module';
import MenuListModule from './menu-list/menu-list.module';
import MenuTileModule from './menu-tile/menu-tile.module';
import appFooter from './footer/footer.module';
import dropdown from '../components/dropdown/dropdown.module';



const ComponentsModule = angular
    .module('lunchTimer.components', [
        appFooter,
        dropdown,
        AccordionModule.name,
        MenuListModule.name,
        MenuTileModule.name
    ]);

export default ComponentsModule.name;
