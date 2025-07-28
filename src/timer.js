function getESTOffset(date) {
    return new Date().getTimezoneOffset() - (date.getTimezoneOffset())
}

function CalculateRemainingTime(date) {
    const _second = 1000;
    const _minute = _second * 60;
    const _hour = _minute * 60;
    const _day = _hour * 24;

    let now = new Date();
    let distance = date - now - getESTOffset(date) * _hour;
    let days = Math.floor(distance / _day);
    let hours = Math.floor((distance % _day) / _hour);
    let minutes = Math.floor((distance % _hour) / _minute);
    let seconds = Math.floor((distance % _minute) / _second);

    return [
        distance,
        days,
        hours,
        minutes,
        seconds,
    ]
}