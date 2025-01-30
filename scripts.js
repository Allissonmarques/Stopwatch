let number = 0
let cron 
let StopWatch = document.querySelector(".Stopwatch")

function startButton(){

    cron = setInterval(function(){
        number++
        StopWatch.innerHTML = number
    },1000)
}

function pauseButton(){
    clearInterval(cron)
}


