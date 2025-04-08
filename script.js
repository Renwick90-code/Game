// Array of riddles
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
    
    // After answering correctly, move to the next riddle or Thank You page
    nextRiddle();
  } else {
    feedback.textContent = "Oops, try again!";
    emoji.textContent = "😞";  // Sad face for incorrect answer
    feedback.classList.remove("correct");
    feedback.classList.add("incorrect");
  }
}

// Function to navigate to the next riddle or to the Thank You page
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

function checkAnswer() {
  const answer = document.getElementById("answer-input").value.trim().toLowerCase();
  const feedback = document.getElementById("feedback");
  const emoji = document.getElementById("emoji");
  const nextButton = document.getElementById("next-riddle");

  // Correct answer for the riddle
  const correctAnswer = "echo";

  // Check if the user's answer is correct
  if (answer === correctAnswer) {
    feedback.textContent = "Correct!";
    feedback.className = "correct";
    emoji.textContent = "🎉"; // Emoji for correct answer
    nextButton.style.display = "inline-block"; // Show next riddle button
  } else {
    feedback.textContent = "Incorrect, try again!";
    feedback.className = "incorrect";
    emoji.textContent = "❌"; // Emoji for incorrect answer
  }
}

function nextRiddle() {
  // Redirect to the next riddle page (riddle3.html)
  window.location.href = 'riddle3.html'; // This is the file you want to navigate to
}




// Initialize the first riddle
window.onload = function() {
  document.getElementById("riddle-text").textContent = riddles[currentRiddle].question;
};
