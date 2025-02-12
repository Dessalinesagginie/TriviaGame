
$(document).ready(function() {
  const questionData = {
    question: " What was the first full length CGI movie?",
    answers: {
      A: "A Bug's Life",
      B: "Monsters Inc",
      C: "Toy Story",
      D: "Phantom Menace"
    },
    correctAnswer: "C" // Corrected answer to Toy Story
  };

  let number = 10;
  let intervalId;
  let timeLeft = 10;
  let answered = false;

  $("#question").text(questionData.question);
  $("#answer-a").text(questionData.answers.A);
  $("#answer-b").text(questionData.answers.B);
  $("#answer-c").text(questionData.answers.C);
  $("#answer-d").text(questionData.answers.D);

  $("#start").on("click", startTimer); // Start button now triggers timer

  $(".answer-option").click(function() {
    if (!answered) {
      answered = true;
      clearInterval(intervalId); // Stop timer when answer is clicked

      const selectedChoice = $(this).data("choice");
      $("#result").empty();

      if (selectedChoice === questionData.correctAnswer) {
        $("#result").html("<span style='color: green;'>Correct!</span>");
      } else {
        $("#result").html("<span style='color: red;'>Incorrect. The correct answer is " + questionData.correctAnswer + ".</span>");
      }
    }
  });

  function startTimer() {
    clearInterval(intervalId);
    timeLeft = 10; // Reset timeLeft
    number = 10;  // Reset number
    answered = false; // Reset answered flag for new question
    updateDisplay();
    intervalId = setInterval(decrement, 1000);
    $("#result").empty(); // Clear previous result
  }

  function decrement() {
    number--;
    timeLeft--;
    updateDisplay();

    if (timeLeft < 0) {
      clearInterval(intervalId);
      if (!answered) { // Only show "Time's Up!" if not answered
        $("#result").html("<span style='color: red;'>All Done!</span>");
      }
    }
  }

  function stopTimer() {
    clearInterval(intervalId);
  }

  function updateDisplay() {
    let displayNumber = number < 0 ? 0 : number;
    $("#show-number").html("<h2>" + displayNumber + "</h2>");
    $("#timer-display").text(timeLeft);
  }
});

