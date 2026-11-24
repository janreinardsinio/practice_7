const timeInput = document.getElementById("timeInput");
const display = document.getElementById("display");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

let timeLeft = 0;
let timer = null;

// Display time
function updateDisplay() {

    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    display.textContent =
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");

}

// Start Timer
startBtn.addEventListener("click", function() {

    if (timer !== null) {
        return;
    }

    if (timeLeft === 0) {

        const inputTime = Number(timeInput.value);

        if (timeInput.value === "" || inputTime <= 0 || !Number.isInteger(inputTime)) {
            alert("Please enter a valid number of seconds.");
            return;
        }

        timeLeft = inputTime;
        updateDisplay();
    }

    timer = setInterval(function() {

        timeLeft--;
        updateDisplay();

        if (timeLeft <= 0) {

            clearInterval(timer);
            timer = null;

            display.textContent = "00:00";

            alert("Countdown Complete!");

        }

    }, 1000);

});

// Pause Timer
pauseBtn.addEventListener("click", function() {

    clearInterval(timer);
    timer = null;

});

// Reset Timer
resetBtn.addEventListener("click", function() {

    clearInterval(timer);
    timer = null;

    timeLeft = 0;
    display.textContent = "00:00";
    timeInput.value = "";

});
