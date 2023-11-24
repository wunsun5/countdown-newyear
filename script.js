const date = document.querySelectorAll('.date .n');

const timeLeft = () => {
    const now = new Date();
    const newYearDate = new Date(now.getFullYear() + 1, 0, 1);
    const timeLeft = newYearDate - now;
    
    const seconds = parseInt((timeLeft % (1000 * 60)) / 1000);
    const minutes = parseInt((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const hours = parseInt((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const days = parseInt(timeLeft / (1000 * 60 * 60 * 24));

    const time = [days, hours, minutes, seconds].map(time => {
        return time < 10 ? `0${time}` : time
    });

    setTime(time);
}

const setTime = (time) => {
    date[0].firstChild.innerHTML = time[0];
    date[1].firstChild.innerHTML = time[1];
    console.log(date)
    date[2].firstChild.innerHTML = time[2];
    date[3].firstChild.innerHTML = time[3];

    let deadline = `1 January ${new Date().getFullYear() + 1}`;
    document.querySelector('.text .t-3').innerHTML = deadline;
}

setInterval(timeLeft, 1000);



