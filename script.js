// Riddles array
const riddles = [
  { question: "What has keys but can't open locks?", answer: "piano" },
  { question: "I speak without a mouth and hear without ears. I have nobody, but I come alive with wind. What am I?", answer: "echo" },
  { question: "The more of this there is, the less you see. What is it?", answer: "darkness" },
];

let currentRiddle = 0;

// Check answer function
function checkAnswer() {
  const userAnswer = document.getElementById("answer-input").value.toLowerCase().trim();
  const correctAnswer = riddles[currentRiddle].answer.toLowerCase();

  const feedback = document.getElementById('feedback');
  const emoji = document.getElementById('emoji');
  
  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done!";
    emoji.textContent = "😊";  // Smiley face for correct answer
    feedback.classList.remove("incorrect");
    feedback.classList.add("correct");
    document.getElementById("next-riddle").style.display = "inline-block";
  } else {
    feedback.textContent = "Oops, try again!";
    emoji.textContent = "😞";  // Sad face for incorrect answer
    feedback.classList.remove("correct");
    feedback.classList.add("incorrect");
  }
}

// Function for navigating to next riddle or final page
function nextRiddle() {
  currentRiddle++;
  if (currentRiddle === 1) {
    window.location.href = "riddle2.html"; // Go to Riddle 2
  } else if (currentRiddle === 2) {
    window.location.href = "riddle3.html"; // Go to Riddle 3
  } else if (currentRiddle === 3) {
    window.location.href = "thankyou.html"; // Go to Thank You page
  }
}

// Initialize first riddle when page loads
window.onload = function() {
  document.getElementById("riddle-text").textContent = riddles[currentRiddle].question;
};
