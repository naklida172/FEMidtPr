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

let daysInMonth = getDaysInMonth(month, year);

for (let i = 1; i <= daysInMonth; i++) {
    let dayDiv = document.createElement("div");
    dayDiv.textContent = i;
    calendarBody.appendChild(dayDiv);
}
