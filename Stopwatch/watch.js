var time = 0;
var interval;
var display = document.getElementById("display");
var altbtn = document.getElementById("altbtn");
var reset = document.getElementById("reset");



// Start Timer Function
function startTimer() {
    altbtn.innerHTML = "Stop"
    if(interval){
        clearInterval(interval);
    }
    interval = setInterval(() => {
        time += 1
        display.innerHTML = 
            Math.floor(time / 3600).toString().padStart(2, "0") + ":" + 
            Math.floor((time % 3600) / 60).toString().padStart(2, "0") + ":" +
            Math.floor((time % 60)).toString().padStart(2, "0")
    } , 1000);
}

// Stop Timer Function 
function stopTimer() {
    altbtn.innerHTML = "Start"
    clearInterval(interval);
    interval = null;
}

// Start/Stop Button Click Event Handling
altbtn.onclick = function() {
    if(interval){
        stopTimer();
    } else {
        startTimer();
    }
}

// Reset Button Click Event Handling
reset.onclick = function() {
    altbtn.innerHTML = "Start"
    if(interval) {
        clearInterval(interval);
    }
    interval = null;
    time = 0;
    display.innerHTML = "00:00:00";
}