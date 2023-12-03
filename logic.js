let [seconds , minutes , hours] = [0 , 0 ,0];
let displayTime = document.getElementById("displayTime");
let timer = null;

function stopwatch(){
    seconds++;

    if (seconds == 60){
        seconds = 0;
        minutes++;

        if (minutes == 60){
            minutes = 0;
            hours++;
        }
    }

    let h = hours;
    let m =minutes;
    let s = seconds;
    if (h<10){
        h= "0"+hours;
    }

    if (m<10){
        m= "0"+m;
    }

    if (s<10){
        s= "0"+s;
    }
    displayTime.innerHTML = h+":"+m+":"+s;
}


// it will execute the function every second
function watchStart(){
    if (timer!=null){
        clearInterval(timer)
    }
    timer = setInterval(stopwatch,1000);
}


function watchStop(){
    clearInterval(timer);
}

function watchReset(){
    clearInterval(timer);
    [seconds , minutes , hours] = [0 , 0 ,0];
displayTime.innerHTML="00:00:00";
}