'use strict';

function createCalendarNameRow(month) {

    const monthNameRow = document.createElement('tr');

    const monthNameTh = document.createElement('th');
    monthNameTh.classList.add("monthName");
    monthNameTh.setAttribute('colspan', "7");
    monthNameTh.innerText = `${month.date.toLocaleString('ru', {month: 'long'})} \`${month.date.getYear() - 100}`;//-100 is BAD

    monthNameRow.appendChild(monthNameTh);

    return monthNameRow;
}

function createCalendarDayNamesRow(week) {

    const weekHeaders = document.createElement('tr');
    week.days.forEach(
        day => {
            const th = document.createElement('th');
            th.innerText = day.getDayName('ru', {weekday: 'short'});
            weekHeaders.appendChild(th);
        }
    );

    return weekHeaders;

}


export default function (month) {

    const calendarHeadElem = document.createElement('thead');

    const monthNameRow = createCalendarNameRow(month);

    const weekHeaders = createCalendarDayNamesRow(month.weeks[0]);

    calendarHeadElem.appendChild(monthNameRow);
    calendarHeadElem.appendChild(weekHeaders);


    return calendarHeadElem;


};








