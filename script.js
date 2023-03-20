// calculate the max time can be calculated by javascript :)
let hour = 24;
let minuts = 60;
let secound = 60;
let milisecound = 1000;
let maxDay = hour * minuts * secound * milisecound;
let maxCal = 100000000;
let date = new Date(maxDay * maxCal);
console.log(date);
