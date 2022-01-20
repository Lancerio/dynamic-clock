const time = document.getElementById('time'),
    date = document.getElementById('date'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    answer = document.getElementById('answer');

const showTime = () => {
    let today = new Date(),
        month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // Show AM PM
   if (hour > 12) {
        hour = hour % 12;
        meridian = 'PM';
    } else if (hour === 0) {
        hour = 12;
        meridian = 'AM';
    } else {
        meridian = 'AM';
    }

    // Show Time and Date
    time.innerHTML = `${hour}:${addZero(min)}:${addZero(sec)} ${meridian}`;
    setTimeout(showTime, 1000);
    date.innerHTML = `${today.getDate()} ${month[today.getMonth()]} ${today.getFullYear()} `
}

// Add Zeroes
const addZero = (n) => {
    if (n < 10) {
        return '0' + n;
    } else {
        return n;
    }
}

// Change BG and Greeting
const changeBG = () => {
    let today = new Date(),
        hour = today.getHours();

    if (hour < 12) {
        document.body.style.backgroundImage = "url('../img/morning.jpg')";
        greeting.innerHTML = 'Good Morning,';
    } else if (hour < 18) {
        document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
        greeting.innerHTML = 'Good Afternoon,';
    } else {
        document.body.style.backgroundImage = "url('../img/evening.jpg')";
        greeting.innerHTML = 'Good Evening,';
        document.body.style.color = 'white';
    }
}

// Save Name
const getName = () => {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

const setName = (e) => {
    if (e.type === 'keypress') {
        if (e.which === 13 || e.which === 9) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

// Save Answer
const getAnswer = () => {
    if (localStorage.getItem('answer') === null) {
        answer.innerHTML = '[Enter answer]';
    } else {
        answer.innerHTML = localStorage.getItem('answer');
    }
}

const setAnswer = (e) => {
    if (e.type === 'keypress') {
        if (e.which === 13 || e.which === 9) {
            localStorage.setItem('answer', e.target.innerText);
            answer.blur();
        }
    } else {
        localStorage.setItem('answer', e.target.innerText);
    }
}

// Event Listeners
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
answer.addEventListener('keypress', setAnswer);
answer.addEventListener('blur', setAnswer);

// Run
showTime();
changeBG();
getName();
getAnswer();
