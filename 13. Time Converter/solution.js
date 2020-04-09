function attachEventsListeners() {
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let daysButton = document.getElementById('daysBtn');
    let hoursButton = document.getElementById('hoursBtn');
    let minutesButton = document.getElementById('minutesBtn');
    let secondsButton = document.getElementById('secondsBtn');

    hours.value = days.value * 24;
    console.log(hours.value);

    let handler = () => {
        hours.value = days.value * 24;
        minutes.value = hours.value * 60;
        seconds.value = minutes.value * 60;
    }

    daysButton.addEventListener('click', handler);
    hoursButton.addEventListener('click', handler);
    minutesButton.addEventListener('click', handler);
    secondsButton.addEventListener('click', handler);
}
