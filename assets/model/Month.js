'use strict';
import Week from './Week.js'

class Month{

    constructor(year, month){
        this._weeks = [];
        this._year = year;
        this._monthNumber = month;

        const monday = Week.getMonday(new Date(year, month, 1));
        do {
            this._weeks.push( new Week(monday) );
            monday.setDate(monday.getDate() + 7);
        }while (monday.getMonth() === month)

    }

    get weeks(){
        return this._weeks;
    }

}



export default Month;
