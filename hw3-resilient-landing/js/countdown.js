const countdown =
    document.querySelector('.countdown');


const daysElement =
    document.querySelector('#days');

const hoursElement =
    document.querySelector('#hours');

const minutesElement =
    document.querySelector('#minutes');

const secondsElement =
    document.querySelector('#seconds');

const targetTime =
    new Date(countdown.dataset.target).getTime();

function updateCountdown() {
    const now = Date.now();

    const remaining =
        Math.max(0, targetTime - now);


    const totalSeconds =
        Math.floor(remaining / 1000);


    const days =
        Math.floor(totalSeconds / 86400);

    const hours =
        Math.floor((totalSeconds % 86400) / 3600);

    const minutes =
        Math.floor((totalSeconds % 3600) / 60);

    const seconds =
        totalSeconds % 60;


    daysElement.textContent = days;
    hoursElement.textContent =
        String(hours).padStart(2, '0');

    minutesElement.textContent =
        String(minutes).padStart(2, '0');

    secondsElement.textContent =
        String(seconds).padStart(2, '0');
}

updateCountdown();

setInterval(updateCountdown, 250);