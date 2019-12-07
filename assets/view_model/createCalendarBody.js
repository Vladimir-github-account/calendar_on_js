'use strict';


export default function (month) {

    const calendarTbody = document.createElement('tbody');
    // calendarBody.append(createCalendarTbody(month));

    month.weeks.forEach(week => {

            const tr = document.createElement('tr');

            week.days.forEach(
                day => {

                    const td = document.createElement('td');
                    if ( day.isCurrent ) {
                        td.classList.add("currentDay");
                    }
                    if ( day.isCurrentMonth ) {
                        td.classList.add("currentMonth");
                    }

                    const dayValue = new Date(day.date); // is it good resolve for typeError?
                    td.innerText = dayValue.getDate() < 10
                        ? `0${dayValue.getDate()}`
                        : dayValue.getDate();
                    tr.appendChild(td);
                }
            );

        calendarTbody.appendChild(tr);
        }
    );
    // return tr;


    return calendarTbody;
}

