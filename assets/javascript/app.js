$(document).ready(function() {
  const questionData = {
    question: "What was the first full length CGI movie?",
    answers: {
      A: "A Bug's Life",
      B: "Monsters Inc",
      C: "Toy Story",
      D: "Phantom Menace"
    },
    correctAnswer: "C"
  };

  let number = 3;
  let intervalId;
  let timeLeft = 3;
  let answered = false;

  // Populate questions and answers
  $("#question").text(questionData.question);
  $("#answer-a").text(questionData.answers.A);
  $("#answer-b").text(questionData.answers.B);
  $("#answer-c").text(questionData.answers.C);
  $("#answer-d").text(questionData.answers.D);

  // Hide quiz elements initially
  $("#question, .answer-option, #show-number, #timer-display, #result").hide();

  $("#start").on("click", startTimer);

  $(".answer-option").click(function() {
    if (!answered) {
      answered = true;
      clearInterval(intervalId);

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
    timeLeft = 5;
    answered = false;
    $("#start").hide();
    $("#question, .answer-option, #show-number, #result").show();
    updateDisplay();
    intervalId = setInterval(decrement, 1000);
    $("#result").empty();
}

function decrement() {
  timeLeft--;
  updateDisplay();

  if (timeLeft < 0) {
      clearInterval(intervalId);
      if (!answered) {
          $("#result").html("<span style='color: red;'>All Done!</span>");
      }
  }
}

function updateDisplay() {
  let displayTime = timeLeft < 0 ? 0 : timeLeft;
  $("#show-number").html("<h2>Time Remaining: " + displayTime + "</h2>");
}
});






