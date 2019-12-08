'use strict';

import createCalendar from "./createCalendar.js";
import model from '../model/index.js';



export default function (month) {
    const calendarPrevMonthButton = document.createElement("div");
    calendarPrevMonthButton.classList.add("prev");
    calendarPrevMonthButton.addEventListener("click", onCalendarNextMonthButtonClick);
    calendarPrevMonthButton.innerText = "<";
    return calendarPrevMonthButton;

    function onCalendarNextMonthButtonClick(event) {
        document.querySelector(".month").remove();

        const prevMonth = month.date;

        prevMonth.setMonth( prevMonth.getMonth() - 1 );
        const newMonth = new model.Month(prevMonth );
        document.body.appendChild( createCalendar(newMonth) );
    }
}