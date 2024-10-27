const calendarBody = document.getElementById("calendar-body");
const monthYear = document.getElementById("month-year");

let date = new Date();
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

monthYear.textContent = `${monthNames[month]} ${year}`;

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
