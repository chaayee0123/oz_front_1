<<<<<<< HEAD
const countdown = document.querySelector(".countdown");

    const interval = setInterval(function(){
        const lastday = new Date("12,31,2024,23:59:59").getTime();
        const today = Date.now();
        const diffDay = lastday - today;
        const diffday = Math.floor(diffDay / (1000*3600*24));
        const diffhour = Math.floor((diffDay % (1000*60*60*24))/ (1000 * 3600) );
        const diffMin = Math.floor((diffDay % (1000*60*60)) / (1000*60));
        const diffSec = Math.floor(diffDay % (1000 * 60) / 1000) ;

        countdown.innerHTML = `
        <div data-content="Days">${diffday}</div>
        <div data-content="Hours">${diffhour}</div>
        <div data-content="Minutes">${diffMin}</div>
        <div data-content="Seconds">${diffSec}</div>
        `
    },1000)





// let countdown;
// countdown = setInterval(function(){
//     const days = document.getElementById("day")
//     const hours = document.getElementById("hour")
//     const minutes = document.getElementById("minute")
//     const seconds = document.getElementById("second")

//     const lastday = new Date("12,31,2024,23:59:59").getTime();
//     const today = Date.now();
//     const diffDay = lastday - today;
//     const diffday = Math.floor(diffDay / (1000*3600*24));
//     const diffhour = Math.floor((diffDay % (1000*60*60*24))/ (1000 * 3600) );
//     const diffMin = Math.floor((diffDay % (1000*60*60)) / (1000*60));
//     const diffSec = Math.floor(diffDay % (1000 * 60) / 1000) ;

//     days.textContent = diffday
//     hours.textContent = diffhour
//     minutes.textContent = diffMin
//     seconds.textContent = diffSec

// },1000)
=======

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
>>>>>>> 4574c7bc24f8d3f610531001bb88f4a455448a67
