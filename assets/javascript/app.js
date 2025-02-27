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

  let timeLeft = 15;
  let intervalId;
  let answered = false;

  // Initialize quiz content
  $(".question").text(questionData.question);
  $(".answer[data-choice='A'] .answer-text").text(questionData.answers.A);
  $(".answer[data-choice='B'] .answer-text").text(questionData.answers.B);
  $(".answer[data-choice='C'] .answer-text").text(questionData.answers.C);
  $(".answer[data-choice='D'] .answer-text").text(questionData.answers.D);

  // Hide quiz elements initially
  $("#timer, #quiz-container").hide();

  $("#start").click(startGame);

  $(".answer").click(function() {
      if (!answered && timeLeft > 0) {
          answered = true;
          clearInterval(intervalId);
          
          $(".answer").removeClass("selected");
          $(this).addClass("selected");
          
          const isCorrect = $(this).data("choice") === questionData.correctAnswer;
          $("#end-message")
              .html(isCorrect ? "Correct!" : "Incorrect! Correct answer was " + questionData.correctAnswer)
              .show();
          
          setTimeout(() => showEndScreen(), 2000);
      }
  });

  function startGame() {
      $("#start, #end-message").hide();
      $("#timer, #quiz-container").show();
      timeLeft = 15;
      answered = false;
      updateTimer();
      intervalId = setInterval(() => {
          timeLeft--;
          updateTimer();
          if (timeLeft <= 0) {
              clearInterval(intervalId);
              showEndScreen();
          }
      }, 1000);
  }

  function updateTimer() {
      $("#timer").text(`Time Remaining: ${timeLeft}`);
  }

  function showEndScreen() {
      $("#timer, #quiz-container").hide();
      $("#end-message").html("All Done!").show();
  }
});$(document).ready(function() {
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

  let timeLeft = 15;
  let intervalId;
  let answered = false;

  // Initialize quiz content
  $(".question").text(questionData.question);
  $(".answer[data-choice='A'] .answer-text").text(questionData.answers.A);
  $(".answer[data-choice='B'] .answer-text").text(questionData.answers.B);
  $(".answer[data-choice='C'] .answer-text").text(questionData.answers.C);
  $(".answer[data-choice='D'] .answer-text").text(questionData.answers.D);

  // Hide quiz elements initially
  $("#timer, #quiz-container").hide();

  $("#start").click(startGame);

  $(".answer").click(function() {
      if (!answered && timeLeft > 0) {
          answered = true;
          clearInterval(intervalId);
          
          $(".answer").removeClass("selected");
          $(this).addClass("selected");
          
          const isCorrect = $(this).data("choice") === questionData.correctAnswer;
          $("#end-message")
              .html(isCorrect ? "Correct!" : "Incorrect! Correct answer was " + questionData.correctAnswer)
              .show();
          
          setTimeout(() => showEndScreen(), 2000);
      }
  });

  function startGame() {
      $("#start, #end-message").hide();
      $("#timer, #quiz-container").show();
      timeLeft = 15;
      answered = false;
      updateTimer();
      intervalId = setInterval(() => {
          timeLeft--;
          updateTimer();
          if (timeLeft <= 0) {
              clearInterval(intervalId);
              showEndScreen();
          }
      }, 1000);
  }

  function updateTimer() {
      $("#timer").text(`Time Remaining: ${timeLeft}`);
  }

  function showEndScreen() {
      $("#timer, #quiz-container").hide();
      $("#end-message").html("All Done!").show();
  }
});