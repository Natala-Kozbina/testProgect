import './in-stock.scss';
import controller from './in-stock.controller';
import template from './in-stock.html';

const inStockComponent = {
    bindings: {
            inStock: "="
    },
    template,
    controller
};

export default inStockComponent;
