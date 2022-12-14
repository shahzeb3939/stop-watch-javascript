let startPauseButton = document.querySelector("#start-pause-button");
let splitButton = document.querySelector("#split-button");
let resetButton = document.querySelector("#reset-button");
let time = document.querySelector(".time");
let timeEndElement = document.querySelector(".time-end");
let table = document.querySelector("#table");
let tableSeparator = document.querySelector(".table-separator")
let tableBody = document.querySelector("#table-body")

let milliSeconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

let trueMilliSeconds = 0;
let trueSeconds = 0;
let trueMinutes = 0;
let trueHours = 0;

let timeEnd = 0;
let trueTimeEnd = 0;

let incrementTimeInterval;
let incrementTimeEndInterval;

let tableCount = 1;


function incrementTime() {
    trueMilliSeconds += 100;
    milliSeconds = trueMilliSeconds % 1000 / 100;

    trueSeconds = Math.floor(trueMilliSeconds/1000);
    seconds = trueSeconds % 60;

    trueMinutes = Math.floor(trueSeconds/60);
    minutes = Math.floor(trueSeconds/60) % 60;

    trueHours = Math.floor(trueMinutes/60);
    hours = trueHours % 99;


    time.innerText = `${hours<10?"0"+hours:hours}:${minutes<10?"0"+minutes:minutes}:${seconds<10?"0"+seconds:seconds}.${milliSeconds}`
    // console.log(hours, minutes, seconds, milliSeconds)
}

function incrementTimeEnd() {
    trueTimeEnd += 1;
    timeEnd = trueTimeEnd % 100;

    timeEndElement.innerText = `${timeEnd<10?"0"+timeEnd:timeEnd}`
}



startPauseButton.addEventListener("click", function(e) {

    

    //^^when Start button is clicked
    if (e.target.innerText === "Start") {

        //Click event on start button will start stopwatch from the current time.
        incrementTimeInterval =setInterval(incrementTime, 100);
        incrementTimeEndInterval = setInterval(incrementTimeEnd, 1);

        //Start button will be transformed to pause button
        e.target.classList.remove("start-button")
        e.target.innerText = "Pause"                
        e.target.classList.add("pause-button")


        //It will enable the split button and disable reset button.
        splitButton.classList.remove("disabled-button") 
        splitButton.classList.add("split-button")
        splitButton.removeAttribute("disabled")
        resetButton.setAttribute("disabled", "")
        resetButton.classList.add("disabled-button")
        resetButton.classList.remove("reset-button")


    }
    
    //^^when Pause button is clicked
    else {

        //Click event on pause button will pause the stopwatch.
        clearInterval(incrementTimeInterval)
        clearInterval(incrementTimeEndInterval)

        //This event add an entery in the log table with pause event and with the time of event triggred.
        let row = table.insertRow()

        let indexCell = row.insertCell(0);
        let timeCell = row.insertCell(1);
        let stateCell = row.insertCell(2);

        indexCell.classList.add("row-index")
        timeCell.classList.add("row-time", "pause-time")
        stateCell.classList.add("row-state")

        indexCell.innerText = "#"+tableCount;
        tableCount++;
        timeCell.innerText = `${hours<10?"0"+hours:hours}:${minutes<10?"0"+minutes:minutes}:${seconds<10?"0"+seconds:seconds}.${milliSeconds}${timeEnd<10?"0"+timeEnd:timeEnd}`
        stateCell.innerText = "Pause"



        //Pause button will be transformed back to start button.
        e.target.innerText = "Start"
        e.target.classList.add("start-button")
        e.target.classList.remove("pause-button")

        //It will enable the reset button and disable split button.
        resetButton.removeAttribute("disabled")
        resetButton.classList.remove("disabled-button")
        resetButton.classList.add("reset-button")

        splitButton.setAttribute("disabled", "")
        splitButton.classList.add("disabled-button")
        splitButton.classList.remove("split-button")
        
        if (table.rows.length != 0) {
            tableSeparator.classList.remove("hide");
        }

    }
})


splitButton.addEventListener("click", function() {

    //This event add an entery in the log table with split event and with the time of event triggred.
    let row = table.insertRow()

    let indexCell = row.insertCell(0);
    let timeCell = row.insertCell(1);
    let stateCell = row.insertCell(2);

    indexCell.classList.add("row-index")
    timeCell.classList.add("row-time", "split-time")
    stateCell.classList.add("row-state")

    indexCell.innerText = "#"+tableCount;
    tableCount++;
    timeCell.innerText = `${hours<10?"0"+hours:hours}:${minutes<10?"0"+minutes:minutes}:${seconds<10?"0"+seconds:seconds}.${milliSeconds}${timeEnd<10?"0"+timeEnd:timeEnd}`
    stateCell.innerText = "Lap"

    if (table.rows.length != 0) {
        tableSeparator.classList.remove("hide");
    }

})


resetButton.addEventListener("click", function(e) {

    //^^Reset button to default state
    resetButton.setAttribute("disabled", "")
    resetButton.classList.add("disabled-button")
    resetButton.classList.remove("reset-button")

    //User click on reset button to bring stopwatch to initial state.
    milliSeconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;

    trueMilliSeconds = 0;
    trueSeconds = 0;
    trueMinutes = 0;
    trueHours = 0;

    timeEnd = 0;
    trueTimeEnd = 0;

    // incrementTimeInterval;
    // incrementTimeEndInterval;

    tableCount = 1;

    time.innerText = "00:00:00.0"
    timeEndElement.innerText = "00"

    tableBody.innerHTML = ""

    if (table.rows.length == 0) {
        tableSeparator.classList.add("hide");
    }

})