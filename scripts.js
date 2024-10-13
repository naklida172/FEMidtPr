const calendarBody = document.getElementById("calendar-body");
const monthYear = document.getElementById("month-year");

let date = new Date();
let dateDay = date.getDate()
let month = date.getMonth();
let year = date.getFullYear();

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const dayNames = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
];

const fullDayNames = [
    "Sunday",
    "Monday",
    "Tueday",
    "Wedday",
    "Thuday",
    "Friday",
    "Satday"
];

let date_ending = "th";

if (dateDay.toString().endsWith('1')) {
    date_ending = "st";
}
else if (dateDay.toString().endsWith('2')) {
    date_ending = "nd";
}
else if (dateDay.toString().endsWith('3')) {
    date_ending = "rd";
}

monthYear.innerHTML = `${fullDayNames[date.getDay()]}-${dateDay}${date_ending}
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
${monthNames[month]} ${year}`;

function getDaysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
}
function getDatesWeekDay(month, year) {
    return new Date(year, month, 1).getDay();
}


for (let i = 0; i <= 6; i++) {
    let dayDiv = document.createElement("div");
    dayDiv.textContent = dayNames[i];
    calendarBody.appendChild(dayDiv);
}

let firstDateDay = getDatesWeekDay(month, year);

for (let i = 0; i < firstDateDay; i++) {
        let dayDiv = document.createElement("div");
        dayDiv.textContent = new Date(year, month, 1-firstDateDay+i).getDate();
        calendarBody.appendChild(dayDiv);
}

let daysInMonth = getDaysInMonth(month, year);

for (let i = 1; i <= daysInMonth; i++) {
    let dayDiv = document.createElement("div");
    dayDiv.textContent = i;
    calendarBody.appendChild(dayDiv);
}
