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
    document.getElementById("next-riddle").style.display = "inline-block"; // Show next riddle button
    
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

// Function to load the next riddle
function nextRiddle() {
  currentRiddle++; // Move to the next riddle
  if (currentRiddle < riddles.length) {
    // Load the next riddle's question
    document.getElementById("riddle-text").textContent = riddles[currentRiddle].question;
    
    // Clear the previous feedback
    document.getElementById('feedback').textContent = '';
    document.getElementById('emoji').textContent = '';
    document.getElementById("answer-input").value = ''; // Clear the input field

    // Hide the "Next Riddle" button until the next riddle is answered
    document.getElementById("next-riddle").style.display = "none";

    // Enable the input and button for the next riddle
    document.getElementById("answer-input").disabled = false;
    document.querySelector("button").disabled = false;
  } else {
    // If all riddles are answered, go to the Thank You page
    window.location.href = "thankyou.html"; // Go to the Thank You page after all riddles are completed
  }
}

// Initialize the first riddle
window.onload = function() {
  document.getElementById("riddle-text").textContent = riddles[currentRiddle].question;
};
