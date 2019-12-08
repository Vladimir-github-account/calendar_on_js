'use strict';

import model from '../model/index.js'
import createCalendar from "./createCalendar.js";
import createButtons from "./createButtons.js";

const month = new model.Month( new Date() );
document.body.appendChild( createButtons(month) );
document.body.appendChild( createCalendar(month) );


/*
const date = new Date();

console.log( date.toLocaleString('ru', {weekday: 'short'}) + " \n " + date.toLocaleString('ru', {month: 'long'}) + " " + date.getDate() );
*/