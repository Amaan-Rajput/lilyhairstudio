import { Body } from "../Additional.js";

// Current date and selected date
let currentDate = new Date();
let selectedDate = new Date();

const hiddenContainer = document.querySelector(".calendar-container");
const overlayer = document.querySelector(".overlayer");
const fakeInput = document.querySelector("#fake-input");

const calendarcall = () => {
    hiddenContainer.innerHTML = `
            <div class="container-header">
                <h2>Choose Date</h2>
                <button class="calendar-closeing-btn"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="calendar-section">
                <div class="calendar-header">
                    <button id="prev-month"><i class="fa-solid fa-backward"></i></button>
                    <h2 id="current-month">Month Year</h2>
                    <button id="next-month"><i class="fa-solid fa-forward"></i></button>
                </div>
                <div class="calendar" id="calendar"></div>
                <button class="today-btn">Today</button>`;
    renderCalendar();
    document.getElementById('prev-month').addEventListener('click', previousMonth);
    document.getElementById('next-month').addEventListener('click', nextMonth);

    const calendarCloseingBtn = hiddenContainer.querySelector(".calendar-closeing-btn");
    const todayBtn = hiddenContainer.querySelector(".today-btn");
    const calendar = hiddenContainer.querySelector("#calendar");
    calendarCloseingBtn.addEventListener("click", () => {
        inactivecalerdar();
        fakeInput.innerHTML = `<span>Booking Date</span>`;
    });

    todayBtn.addEventListener("click", () => {
        inactivecalerdar();
        fakeInput.innerHTML = formatDate(currentDate);
    });

    calendar.addEventListener("click", () => {
        inactivecalerdar();
        fakeInput.innerHTML = formatDate(selectedDate);
    })

    overlayer.addEventListener("click", () => {
        inactivecalerdar()
    });
}


const inactivecalerdar = () => {
    hiddenContainer.innerHTML = '';
    Body.classList.remove("calendaractive");
    hiddenContainer.style.height = "0";
}
let x = window.matchMedia("(max-width: 550px)")


fakeInput.addEventListener("click", () => {
    Body.classList.add("calendaractive");
    if (x.matches) {
        hiddenContainer.style.height = "400px";
    } else {
        hiddenContainer.style.height = "550px";
    }
    calendarcall();
});

// Render the calendar for the current month
function renderCalendar() {
    const calendarEl = document.getElementById('calendar');
    const monthYearEl = document.getElementById('current-month');

    // Clear previous calendar
    calendarEl.innerHTML = '';

    // Set month and year header
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
    monthYearEl.textContent = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

    // Add day headers
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    dayNames.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.className = 'day-header';
        dayHeader.textContent = day;
        calendarEl.appendChild(dayHeader);

    });

    // Get first day of month and number of days
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    // Add days from previous month
    const prevMonthLastDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    for (let i = 0; i < startingDay; i++) {
        const day = document.createElement('div');
        day.className = 'day other-month';
        day.textContent = prevMonthLastDay - startingDay + i + 1;
        calendarEl.appendChild(day);
    }


    // Add days of current month
    const today = new Date();
    for (let i = 1; i <= daysInMonth; i++) {
        const day = document.createElement('div');
        day.className = 'day';
        day.textContent = i;

        // Check if this is today
        if (today.getDate() === i &&
            today.getMonth() === currentDate.getMonth() &&
            today.getFullYear() === currentDate.getFullYear()) {
            day.classList.add('today');
        }

        // Check if this is the selected date
        if (selectedDate.getDate() === i &&
            selectedDate.getMonth() === currentDate.getMonth() &&
            selectedDate.getFullYear() === currentDate.getFullYear()) {
            day.classList.add('selected');
        }

        // Add click event
        day.addEventListener('click', () => selectDate(i));
        calendarEl.appendChild(day);

    }
    // Add days from next month
    const totalCells = 42; // 6 rows of 7 days
    const remainingCells = totalCells - (startingDay + daysInMonth);
    for (let i = 1; i <= remainingCells; i++) {
        const day = document.createElement('div');
        day.className = 'day other-month';
        day.textContent = i;
        calendarEl.appendChild(day);
    }
}

// Select a date
function selectDate(day) {
    selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    renderCalendar();
}

// Go to previous month
function previousMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
}

// Go to next month
function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
}


// Helper function to format date as DD-MM-YYYY
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${day}/${month}/${year}`;
}

// document.addEventListener("click", () => {
//     console.log(selectedDate)
//     const selectedDateString = formatDate(selectedDate);
//     console.log(selectedDateString);
// })
