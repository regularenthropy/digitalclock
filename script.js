function display_time() {
    let time = new Date();
    let hrs = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    document.getElementById('hours').innerHTML = hrs;
    if (min < 10) {
        document.getElementById('minutes').innerHTML = "0" + min;
    } else {
        document.getElementById('minutes').innerHTML = min;
    }
    if (sec < 10) {
        document.getElementById('seconds').innerHTML = "0" + sec;
    } else {
        document.getElementById('seconds').innerHTML = sec;
    }
}

setInterval(display_time, 10);