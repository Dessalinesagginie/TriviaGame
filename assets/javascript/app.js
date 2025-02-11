$("button").click(addTask);

function addTask() {

  console.log("Des")

}

       
var number = 100;
var intervalId;

$("#start").on("click", startTimer); // Start button triggers timer
$("#resume").on("click", startTimer); // Resume also triggers timer
$("#stop").on("click", stopTimer);     // Stop button stops timer

function startTimer() {  // Renamed for clarity
    clearInterval(intervalId); // Clear any existing timer
    intervalId = setInterval(decrement, 1000);
    number = 100; // Reset the number when Start or Resume is clicked
    $("#show-number").html("<h2>" + number + "</h2>"); // Update the display
}

function decrement() {
    number--;
    $("#show-number").html("<h2>" + number + "</h2>");

    if (number === 0) {
        stopTimer(); // Stop the timer when it reaches 0
        alert("Time Up!");

        // ***IMPORTANT: This is where you handle what happens when time runs out.***
        // ... (your game logic here) ...
    }
}

function stopTimer() { // Separate function for stopping
    clearInterval(intervalId);
}
 
