let correctAnswer = "";

// Set the correct answer for this page
function setCorrectAnswer(answer) {
  correctAnswer = answer;
}

// Check the user's input
function checkAnswer() {
  const userAnswer = document.getElementById("answer-input").value.toLowerCase().trim();
  const feedback = document.getElementById('feedback');
  const emoji = document.getElementById('emoji');

  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done!";
    emoji.textContent = "😊";
    feedback.classList.remove("incorrect");
    feedback.classList.add("correct");

    const nextButton = document.getElementById("next-riddle");
    const finishButton = document.getElementById("finish-game");

    if (nextButton) nextButton.style.display = "inline-block";
    if (finishButton) finishButton.style.display = "inline-block";

    document.getElementById("answer-input").disabled = true;
    document.querySelector("button").disabled = true;
  } else {
    feedback.textContent = "Oops, try again!";
    emoji.textContent = "😞";
    feedback.classList.remove("correct");
    feedback.classList.add("incorrect");
  }
}

// Move to the next riddle
function nextRiddle() {
  const path = window.location.pathname;
  if (path.includes("riddle1.html")) {
    window.location.href = 'riddle2.html';
  } else if (path.includes("riddle2.html")) {
    window.location.href = 'riddle3.html';
  }
}

// Finish the game
function finishGame() {
  window.location.href = 'thankyou.html';
}

// On load, set correct answer based on current page
window.onload = function () {
  const path = window.location.pathname;

  if (path.includes("riddle1.html")) {
    setCorrectAnswer("piano");
  } else if (path.includes("riddle2.html")) {
    setCorrectAnswer("echo");
  } else if (path.includes("riddle3.html")) {
    setCorrectAnswer("darkness");
  }
};

// Responsive navbar toggle
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

if (burger && navLinks) {
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}
