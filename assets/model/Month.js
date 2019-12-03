'use strict';
import Week from './Week.js'

class Month{

    constructor(date){
        this._weeks = [];
        this._date = date;

        const monday = Week.getMonday(new Date(date.getFullYear(), date.getMonth(), 1));
        do {
            this._weeks.push( new Week(monday) );
            monday.setDate(monday.getDate() + 7);
        }while (monday.getMonth() === date.getMonth())

    }

    get weeks(){
        return this._weeks;
    }

    get date(){
        return this._date;
    }



}



export default Month;
