const riddles = [
  { question: "What has keys but can't open locks?", answer: "piano" },
  { question: "I speak without a mouth and hear without ears. I have nobody, but I come alive with wind. What am I?", answer: "echo" },
  { question: "The more of this there is, the less you see. What is it?", answer: "darkness" },
];

let currentRiddle = 0;

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
    document.getElementById("next-riddle").style.display = "inline-block";
  } else {
    feedback.textContent = "Oops, try again!";
    emoji.textContent = "😞";  // Sad face for incorrect answer
    feedback.classList.remove("correct");
    feedback.classList.add("incorrect");
  }
}

function nextRiddle() {
  currentRiddle++;
  if (currentRiddle < riddles.length) {
    // Show the next riddle
    document.getElementById("riddle-text").textContent = riddles[currentRiddle].question;
    document.getElementById("answer-input").value = "";  // Clear the answer field
    document.getElementById("feedback").textContent = ""; // Clear feedback
    document.getElementById("emoji").textContent = ""; // Clear emoji
    document.getElementById("next-riddle").style.display = "none"; // Hide next riddle button until answer is checked
  } else {
    // If all riddles are answered, go to the Thank You page
    window.location.href = "thankyou.html";
  }
}

// Display the first riddle when the page loads
window.onload = function() {
  document.getElementById("riddle-text").textContent = riddles[currentRiddle].question;
};
