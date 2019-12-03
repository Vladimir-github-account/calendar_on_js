'use strict';

import Day from './Day.js'

class Week {
    constructor(date) {

        this._days = [];

        const firstDate = Week.getMonday(date);

        for (; ; firstDate.setDate(firstDate.getDate() + 1)) {

            this._days.push( new Day( new Date(firstDate) ));

            if(!firstDate.getDay()){
                break;
            }
        }
    }

    get days() {
        return this._days;
    }
    
    static getMonday(date){

        const monday = new Date(date);
        const weekDayNumber = monday.getDay();
        monday.setDate(monday.getDate() - (weekDayNumber ? weekDayNumber - 1 : 6));// 1 :  1 2 3 4 5 6 0
        return monday;
    }

}





export default Week;
