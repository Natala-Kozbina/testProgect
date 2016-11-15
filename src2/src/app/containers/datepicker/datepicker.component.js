import controller from './datepicker.controller.js';
import './datepicker.scss';
import template from './datepicker.html';

const DatepickerComponent = {
    bindings: {
        menuShowed: '=',
        toggleMenu: '&'
    },
    controller,
    template
};

export default DatepickerComponent;