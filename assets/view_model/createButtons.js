'use strict';

import createCalendarNextMonthButton from "./createCalendarNextMonthButton.js";
import createCalendarPrevMonthButton from "./createCalendarPrevMonthButton.js";

export default function (month) {
    const nav = document.createElement("div");
    nav.classList.add("nav");
    nav.appendChild(createCalendarPrevMonthButton(month));
    nav.appendChild(createCalendarNextMonthButton(month));
    return nav;
}