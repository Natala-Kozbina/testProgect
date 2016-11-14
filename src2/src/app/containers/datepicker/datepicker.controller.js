class DatepickerController {
    constructor() {}

    $onInit() {
        this.date = new Date();
        this.opened = false;
        this.format = 'dd.MM.yyyy';
        this.dateOptions = {};
        this.closeOnDateSelection = true;
    }
    open() {
        console.log('open');
        this.opened = true;
    };
}

export default DatepickerController;
