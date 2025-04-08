// Array of riddles
const riddles = [
  { question: "What has keys but can't open locks?", answer: "piano" },
  { question: "I speak without a mouth and hear without ears. I have nobody, but I come alive with wind. What am I?", answer: "echo" },
  { question: "The more of this there is, the less you see. What is it?", answer: "darkness" },
];

let currentRiddle = parseInt(localStorage.getItem("currentRiddle")) || 0;

// Function to load the current riddle
function loadRiddle() {
  document.getElementById("riddle-text").textContent = riddles[currentRiddle].question;
}

// Function to check the answer
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
    
    // Reload the page to reflect the next riddle
    window.location.reload();
  } else {
    // If all riddles are completed, go to the Thank You page
    window.location.href = "thankyou.html"; // Go to the Thank You page after all riddles are completed
  }
}

// Initialize the first riddle
window.onload = function() {
  loadRiddle();
};
