let startPauseButton = document.querySelector("#start-pause-button");
let splitButton = document.querySelector("#split-button");
let resetButton = document.querySelector("#reset-button");




startPauseButton.addEventListener("click", function(e) {

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