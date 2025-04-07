const riddles = [
  { question: "What has keys but can't open locks?", answer: "piano" },
  { question: "I speak without a mouth and hear without ears. I have nobody, but I come alive with wind. What am I?", answer: "echo" },
  { question: "The more of this there is, the less you see. What is it?", answer: "darkness" },
];

let currentRiddle = 0; // Start with the first riddle

// Function to check the user's answer
function checkAnswer() {
  const userAnswer = document.getElementById("answer-input").value.toLowerCase().trim();
  const correctAnswer = riddles[currentRiddle].answer.toLowerCase();

  const feedback = document.getElementById('feedback');
  const emoji = document.getElementById('emoji');
  
  // Check if the answer is correct
  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done!";
    emoji.textContent = "😊";  // Smiley face for correct answer
    feedback.classList.remove("incorrect");
    feedback.classList.add("correct");

    // If it's Riddle 3, redirect to Thank You page immediately
    if (currentRiddle === 2) {
      setTimeout(function() {
        window.location.href = "thankyou.html"; // Redirect to Thank You page after 1 second
      }, 1000); // Delay for 1 second for a smoother transition
    } else {
      // For other riddles, show the "Next Riddle" button
      document.getElementById("next-riddle").style.display = "inline-block";
    }
  } else {
    feedback.textContent = "Oops, try again!";
    emoji.textContent = "😞";  // Sad face for incorrect answer
    feedback.classList.remove("correct");
    feedback.classList.add("incorrect");
  }
}

// Function to load the next riddle
function nextRiddle() {
  currentRiddle++;
  if (currentRiddle < riddles.length) {
    document.getElementById("riddle-text").textContent = riddles[currentRiddle].question;
    document.getElementById("answer-input").value = "";
    document.getElementById("feedback").textContent = "";
    document.getElementById("emoji").textContent = "";  // Clear the emoji
    document.getElementById("next-riddle").style.display = "none";
  } else {
    document.getElementById("riddle-text").textContent = "Congrats, you've solved all the riddles!";
    document.getElementById("next-riddle").style.display = "none";
  }
}

// Display the first riddle when the page loads
window.onload = function() {
  document.getElementById("riddle-text").textContent = riddles[currentRiddle].question;
};
