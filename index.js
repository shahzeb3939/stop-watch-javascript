let startPauseButton = document.querySelector("#start-pause-button");
let splitButton = document.querySelector("#split-button");
let resetButton = document.querySelector("#reset-button");

let milliSeconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

let trueMilliSeconds = 0;
let trueSeconds = 0;
let trueMinutes = 0;
let trueHours = 0;

function incrementMilliSeconds() {
    trueMilliSeconds += 1;
    milliSeconds = trueMilliSeconds % 1000;

    trueSeconds = Math.floor(trueMilliSeconds/1000);
    seconds = trueSeconds % 60;

    trueMinutes = Math.floor(trueSeconds/60);
    minutes = Math.floor(trueSeconds/60) % 60;

    trueHours = Math.floor(trueMinutes/60);
    hours = trueHours % 99;



    console.log(hours, minutes, seconds, milliSeconds)
}



startPauseButton.addEventListener("click", function(e) {

    setInterval(incrementMilliSeconds, 1);

    //^^when Start button is clicked
    if (e.target.innerText === "Start") {

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
        

    }
}) 

resetButton.addEventListener("click", function(e) {

    //^^Reset button to default state
    resetButton.setAttribute("disabled", "")
    resetButton.classList.add("disabled-button")
    resetButton.classList.remove("reset-button")
    
})