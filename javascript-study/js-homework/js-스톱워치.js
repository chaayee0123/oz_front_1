var stTime = 0;
var endTime = 0;
var timerStart;

var min;
var sec;
var milisec;

var startBtn = document.getElementById('start')
var stopBtn = document.getElementById('stop')

startBtn.addEventListener("click", function(){
    if(! stTime){
        stTime = Date.now()
    } else {
        stTime += (Date.now() - endTime)
    }

    timerStart = setInterval(function(){
        var nowTime = new Date(Date.now() - stTime)
        

         min = addZero(nowTime.getMinutes())
         sec = addZero(nowTime.getSeconds())
         milisec = addZero(Math.floor(nowTime.getMilliseconds() / 10))

        document.getElementById("postTestmin").innerHTML = min
        document.getElementById("postTestsec").innerHTML = sec
        document.getElementById("postTestmilisec").innerHTML = milisec
    },1)
})

document.getElementById('stop').addEventListener('click', function(){
    if(timerStart){
        clearInterval(timerStart)
        endTime = Date.now()
    }
})

function addZero(num){
    return ( num < 10 ? '0'+num : ''+num)
}