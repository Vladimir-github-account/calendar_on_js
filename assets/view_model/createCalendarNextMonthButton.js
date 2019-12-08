'use strict';

import createCalendar from "./createCalendar.js";
import model from '../model/index.js';



export default function (month) {
    const calendarNextMonthButton = document.createElement("div");
    calendarNextMonthButton.classList.add("next");
    calendarNextMonthButton.addEventListener("click", onCalendarNextMonthButtonClick);
    calendarNextMonthButton.innerText = ">";
    return calendarNextMonthButton;

    function onCalendarNextMonthButtonClick(event) {
        document.querySelector(".month").remove();

        const nextMonth = month.date;

        nextMonth.setMonth( nextMonth.getMonth() + 1 );
        console.log(nextMonth);
        const newMonth = new model.Month(nextMonth );
        document.body.appendChild( createCalendar(newMonth) );
    }
}