'use strict';

class Day{

    constructor(date){
        this._date = date;
        this._isCurrent = Day.isCurrent(date);
        this._isCurrentMonth = Day.isCurrentMonth(date);
    }

    get date(){
        return this._date;
    }

    set date(value){
        this._isCurrent = Day.isCurrent(value);
        this._date = value;
    }

    get isCurrent(){
        return this._isCurrent;
    }

    get isCurrentMonth(){
        return this._isCurrentMonth;
    }

    static isCurrent(date){
        return date.toDateString() === Day.currentDate.toDateString()
    }

    static isCurrentMonth(date){
        return date.getMonth() === Day.currentDate.getMonth() && date.getFullYear() === Day.currentDate.getFullYear() ;
    }

    getDayName(lang, option){

        return this.date.toLocaleString(lang, option)

    }

    static currentDate = new Date();

}





export default Day;
