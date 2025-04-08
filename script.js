// Array of riddles
const riddles = [
  { question: "What has keys but can't open locks?", answer: "piano" },
  { question: "I speak without a mouth and hear without ears. I have nobody, but I come alive with wind. What am I?", answer: "echo" },
  { question: "The more of this there is, the less you see. What is it?", answer: "darkness" },
];

// Get the current riddle index from localStorage or default to 0 (start from the first riddle)
let currentRiddle = parseInt(localStorage.getItem("currentRiddle")) || 0;

// Function to load the current riddle
function loadRiddle() {
  // Check if we're still within the bounds of the riddles array
  if (currentRiddle < riddles.length) {
    document.getElementById("riddle-text").textContent = riddles[currentRiddle].question;
    // Dynamically set the heading based on the current riddle
    document.querySelector("h1").textContent = "Riddle " + (currentRiddle + 1);  // Adjusting for 1-based index (Riddle 1, Riddle 2, etc.)
    
    // Hide the next button initially
    document.getElementById("next-riddle").style.display = "none";
    document.getElementById("finish-game").style.display = "none";  // Hide the Finish Game button for Riddles 1 and 2
  } else {
    // If no more riddles, redirect to the Thank You page
    localStorage.removeItem("currentRiddle"); // Clear the saved riddle
    window.location.href = "thankyou.html"; // Go to Thank You page
  }
}

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
    
    // Show the appropriate button
    if (currentRiddle < riddles.length - 1) {
      document.getElementById("next-riddle").style.display = "inline-block";  // Show the Next Riddle button
    } else {
      document.getElementById("finish-game").style.display = "inline-block";  // Show the Finish Game button on the last riddle
    }
    
    // Optionally: Disable the input and submit button after answering
    document.getElementById("answer-input").disabled = true;
    document.querySelector("button").disabled = true;
  } else {
    feedback.textContent = "Oops, try again!";
    emoji.textContent = "😞";  // Sad face for incorrect answer
    feedback.classList.remove("correct");
    feedback.classList.add("incorrect");
  }
}

// Function to move to the next riddle
function nextRiddle() {
  currentRiddle++; // Move to the next riddle
  if (currentRiddle < riddles.length) {
    // Save the current riddle to localStorage to keep track of progress
    localStorage.setItem("currentRiddle", currentRiddle);
    // Go to the next riddle page
    window.location.href = `riddle${currentRiddle + 1}.html`;  // For example: riddle2.html, riddle3.html
  } else {
    // If all riddles are completed, go to the Thank You page
    localStorage.removeItem("currentRiddle"); // Optional: Clear the stored riddle number
    window.location.href = "thankyou.html"; // Go to Thank You page
  }
}

// Function to finish the game and go to the Thank You page
function finishGame() {
  window.location.href = 'thankyou.html';  // Redirect to the Thank You page
}

// Initialize the first riddle
window.onload = function() {
  loadRiddle();
};
