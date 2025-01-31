let seconds= 0
let minutes= 0
let hours= 0
let interval

function fullTime(digit){
    if(digit<10){
        return("0"+digit)
    }
    else{
        return(digit)
    }
}

function startButton(){
    time()
    interval= setInterval(time, 1000)
}

function pauseButton(){
   clearInterval(interval)
}

function stopButton(){
    clearInterval(interval)
    seconds= 0
    minutes= 0
    document.getElementById("time").innerHTML= "00:00:00"
}

function time(){
    seconds++
    
    if(seconds==60){
        minutes++
        seconds=0
        if(minutes==60){
            hours++
            minutes=0
        }
    }
    
    document.getElementById("time").innerHTML=fullTime(hours)+":"+fullTime(minutes)+":"+fullTime(seconds)

    
}