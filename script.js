// script.js
const riddles = [
  { question: "What has keys but can't open locks?", answer: "piano" },
  { question: "I speak without a mouth and hear without ears. I have nobody, but I come alive with wind. What am I?", answer: "echo" },
  { question: "The more of this there is, the less you see. What is it?", answer: "darkness" },
];

let currentRiddle = 0;

function checkAnswer() {
  const userAnswer = document.getElementById("answer-input").value.toLowerCase().trim();
  const correctAnswer = riddles[currentRiddle].answer.toLowerCase();

  if (userAnswer === correctAnswer) {
    document.getElementById("feedback").textContent = "Correct! Well done!";
    document.getElementById("next-riddle").style.display = "inline-block";
  } else {
    document.getElementById("feedback").textContent = "Oops, try again!";
  }
}

function nextRiddle() {
  currentRiddle++;
  if (currentRiddle < riddles.length) {
    document.getElementById("riddle-text").textContent = riddles[currentRiddle].question;
    document.getElementById("answer-input").value = "";
    document.getElementById("feedback").textContent = "";
    document.getElementById("next-riddle").style.display = "none";
  } else {
    document.getElementById("riddle-text").textContent = "Congrats, you've solved all the riddles!";
    document.getElementById("next-riddle").style.display = "none";
  }
}

// This function is called when the player answers a riddle
function checkAnswer(userAnswer, correctAnswer) {
  const feedback = document.getElementById('feedback');
  const emoji = document.getElementById('emoji');
  
  // Check if the answer is correct
  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    feedback.textContent = "Correct!";
    emoji.textContent = "😊";  // Smiley face for correct answer
    feedback.classList.remove("incorrect");
    feedback.classList.add("correct");
  } else {
    feedback.textContent = "Incorrect!";
    emoji.textContent = "😞";  // Sad face for incorrect answer
    feedback.classList.remove("correct");
    feedback.classList.add("incorrect");
  }
}

// Function to check answer and display feedback
function checkAnswer(userAnswer, correctAnswer) {
  const feedback = document.getElementById('feedback');
  const emoji = document.getElementById('emoji');
  
  // Check if the answer is correct
  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    feedback.textContent = "Correct!";
    emoji.textContent = "😊";  // Smiley face for correct answer
    feedback.classList.remove("incorrect");
    feedback.classList.add("correct");
  } else {
    feedback.textContent = "Incorrect!";
    emoji.textContent = "😞";  // Sad face for incorrect answer
    feedback.classList.remove("correct");
    feedback.classList.add("incorrect");
  }
}


