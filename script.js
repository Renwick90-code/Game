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
  console.log("Current Riddle Index:", currentRiddle);  // Debugging line to check the current riddle index
  
  // Check if we're still within the bounds of the riddles array
  if (currentRiddle < riddles.length) {
    document.getElementById("riddle-text").textContent = riddles[currentRiddle].question;
    document.querySelector("h1").textContent = "Riddle " + (currentRiddle + 1); // Dynamically set the riddle number

    // Hide the Next Riddle and Finish buttons initially
    document.getElementById("next-riddle").style.display = "none";
    document.getElementById("finish-game").style.display = "none";
  } else {
    // If no more riddles, redirect to the Thank You page
    localStorage.removeItem("currentRiddle"); // Clear the saved riddle index
    window.location.href = "thankyou.html"; // Go to Thank You page
  }
}

// Function to check the user's answer
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

    // Show the appropriate button based on the riddle
    if (currentRiddle < riddles.length - 1) {
      document.getElementById("next-riddle").style.display = "inline-block"; // Show Next Riddle button
    } else {
      document.getElementById("finish-game").style.display = "inline-block"; // Show Finish Game button for last riddle
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
    localStorage.removeItem("currentRiddle"); // Clear the saved riddle number
    window.location.href = "thankyou.html"; // Go to Thank You page
  }
}

// Function to finish the game and go to the Thank You page
function finishGame() {
  window.location.href = 'thankyou.html';  // Redirect to the Thank You page
}

// Initialize the riddle page when it loads
window.onload = function() {
  loadRiddle(); // Load the current riddle when the page loads
};
