class DatePickerDropdownController {
    constructor() {
    }

    $onInit() {
        this.range = [];
        this.setRange();
        this.currentValue =  this.range[0];
    }

    setRange() {
        for(let i = 1; i <= 7; i++) {
            let date = new Date();
            console.log('date.getDate() + i',date.getDate() + i);
            date.setDate(date.getDate() + i);
            this.range.push(date);
        }
        console.log(this.range);
    }

    setCurrentValue(value) {
        this.currentValue = value;
    }
}

export default DatePickerDropdownController;