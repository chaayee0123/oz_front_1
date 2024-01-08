
const countdown = setInterval(function(){
    const days = document.getElementById("day")
    const hours = document.getElementById("hour")
    const minutes = document.getElementById("minute")
    const seconds = document.getElementById("second")

    const lastday = new Date("12,31,2024,23:59:59").getTime();
    const today = Date.now();
    const diffDay = lastday - today;
    const diffday = Math.floor(diffDay / (1000*3600*24));
    const diffhour = Math.floor((diffDay % (1000*60*60*24))/ (1000 * 3600) );
    const diffMin = Math.floor((diffDay % (1000*60*60)) / (1000*60));
    const diffSec = Math.floor(diffDay % (1000 * 60) / 1000) ;

    days.textContent = diffday
    hours.textContent = diffhour
    minutes.textContent = diffMin
    seconds.textContent = diffSec

},1000)