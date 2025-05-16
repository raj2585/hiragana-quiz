let timer;
let elapsedTime = 0;
let startTime;
let playerName = "";

const hiraganaSet = [
    { char: "あ", answer: "a", options: ["a", "i", "u", "e"] },
    { char: "い", answer: "i", options: ["a", "i", "u", "o"] },
    { char: "う", answer: "u", options: ["e", "o", "u", "i"] },
    { char: "え", answer: "e", options: ["e", "a", "u", "o"] },
    { char: "お", answer: "o", options: ["i", "o", "e", "a"] },
    { char: "か", answer: "ka", options: ["ka", "ki", "ku", "ko"] },
    { char: "き", answer: "ki", options: ["ke", "ko", "ka", "ki"] },
    { char: "く", answer: "ku", options: ["ka", "ke", "ku", "ko"] },
    { char: "け", answer: "ke", options: ["ki", "ku", "ke", "ka"] },
    { char: "こ", answer: "ko", options: ["ko", "ka", "ke", "ku"] },
    { char: "さ", answer: "sa", options: ["sa", "shi", "su", "so"] },
    { char: "し", answer: "shi", options: ["sa", "shi", "se", "so"] },
    { char: "す", answer: "su", options: ["shi", "su", "sa", "se"] },
    { char: "せ", answer: "se", options: ["su", "sa", "se", "shi"] },
    { char: "そ", answer: "so", options: ["se", "so", "su", "sa"] },
    { char: "た", answer: "ta", options: ["ta", "chi", "tsu", "to"] },
    { char: "ち", answer: "chi", options: ["ta", "chi", "te", "to"] },
    { char: "つ", answer: "tsu", options: ["ta", "tsu", "te", "chi"] },
    { char: "て", answer: "te", options: ["tsu", "ta", "te", "to"] },
    { char: "と", answer: "to", options: ["ta", "te", "to", "tsu"] },
    { char: "な", answer: "na", options: ["na", "ni", "nu", "no"] },
    { char: "に", answer: "ni", options: ["na", "ni", "ne", "no"] },
    { char: "ぬ", answer: "nu", options: ["na", "nu", "ni", "ne"] },
    { char: "ね", answer: "ne", options: ["nu", "na", "ne", "ni"] },
    { char: "の", answer: "no", options: ["ne", "no", "nu", "na"] },
    { char: "は", answer: "ha", options: ["ha", "hi", "fu", "ho"] },
    { char: "ひ", answer: "hi", options: ["ha", "hi", "he", "ho"] },
    { char: "ふ", answer: "fu", options: ["ha", "fu", "he", "hi"] },
    { char: "へ", answer: "he", options: ["fu", "ha", "he", "ho"] },
    { char: "ほ", answer: "ho", options: ["he", "ho", "fu", "ha"] },
    { char: "ま", answer: "ma", options: ["ma", "mi", "mu", "mo"] },
    { char: "み", answer: "mi", options: ["ma", "mi", "me", "mo"] },
    { char: "む", answer: "mu", options: ["ma", "mu", "mi", "me"] },
    { char: "め", answer: "me", options: ["mu", "ma", "me", "mi"] },
    { char: "も", answer: "mo", options: ["me", "mo", "mu", "ma"] },
    { char: "や", answer: "ya", options: ["ya", "yu", "yo", "ma"] },
    { char: "ゆ", answer: "yu", options: ["ya", "yu", "yo", "mu"] },
    { char: "よ", answer: "yo", options: ["ya", "yu", "yo", "mo"] },
    { char: "ら", answer: "ra", options: ["ra", "ri", "ru", "ro"] },
    { char: "り", answer: "ri", options: ["ra", "ri", "re", "ro"] },
    { char: "る", answer: "ru", options: ["ra", "ru", "ri", "re"] },
    { char: "れ", answer: "re", options: ["ru", "ra", "re", "ri"] },
    { char: "ろ", answer: "ro", options: ["re", "ro", "ru", "ra"] },
    { char: "わ", answer: "wa", options: ["wa", "wo", "n", "ra"] },
    { char: "を", answer: "wo", options: ["wa", "wo", "n", "ro"] },
    { char: "ん", answer: "n", options: ["wa", "wo", "n", "ya"] },
    { char: "が", answer: "ga", options: ["ga", "gi", "gu", "go"] },
    { char: "ぎ", answer: "gi", options: ["ga", "gi", "ge", "go"] },
    { char: "ぐ", answer: "gu", options: ["ga", "gu", "gi", "ge"] },
    { char: "げ", answer: "ge", options: ["gu", "ga", "ge", "gi"] },
    { char: "ご", answer: "go", options: ["ge", "go", "gu", "ga"] },
    { char: "ざ", answer: "za", options: ["za", "ji", "zu", "zo"] },
    { char: "じ", answer: "ji", options: ["za", "ji", "ze", "zo"] },
    { char: "ず", answer: "zu", options: ["za", "zu", "ji", "ze"] },
    { char: "ぜ", answer: "ze", options: ["zu", "za", "ze", "ji"] },
    { char: "ぞ", answer: "zo", options: ["ze", "zo", "zu", "za"] },
    { char: "だ", answer: "da", options: ["da", "ji", "dzu", "do"] },
    { char: "ぢ", answer: "ji", options: ["da", "ji", "de", "do"] },
    { char: "づ", answer: "dzu", options: ["da", "dzu", "ji", "de"] },
    { char: "で", answer: "de", options: ["dzu", "da", "de", "ji"] },
    { char: "ど", answer: "do", options: ["de", "do", "dzu", "da"] },
    { char: "ば", answer: "ba", options: ["ba", "bi", "bu", "bo"] },
    { char: "び", answer: "bi", options: ["ba", "bi", "be", "bo"] },
    { char: "ぶ", answer: "bu", options: ["ba", "bu", "bi", "be"] },
    { char: "べ", answer: "be", options: ["bu", "ba", "be", "bi"] },
    { char: "ぼ", answer: "bo", options: ["be", "bo", "bu", "ba"] },
    { char: "ぱ", answer: "pa", options: ["pa", "pi", "pu", "po"] },
    { char: "ぴ", answer: "pi", options: ["pa", "pi", "pe", "po"] },
    { char: "ぷ", answer: "pu", options: ["pa", "pu", "pi", "pe"] },
    { char: "ぺ", answer: "pe", options: ["pu", "pa", "pe", "pi"] },
    { char: "ぽ", answer: "po", options: ["pe", "po", "pu", "pa"] }
    // Add more characters as needed
  ];
  
  let currentQuestion = 0;
  let score = 0;
  let questions = [];
  
  // Add event listener for Enter key
  document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById("player-name");
    nameInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        validateAndStart();
      }
    });
  });
  
  function validateAndStart() {
    const nameInput = document.getElementById("player-name");
    const errorDiv = document.getElementById("name-error");
    playerName = nameInput.value.trim();
  
    if (!playerName) {
      errorDiv.textContent = "Please enter your name to start the quiz";
      return;
    }
  
    errorDiv.textContent = "";
    startQuiz();
  }
  
  function startQuiz() {
    document.getElementById("instructions").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    document.getElementById("result").style.display = "none";
  
    questions = shuffleArray([...hiraganaSet]).slice(0, 10);
    currentQuestion = 0;
    score = 0;
    elapsedTime = 0;
    startTime = Date.now();
  
    // Start timer counting up
    timer = setInterval(() => {
      elapsedTime = Math.floor((Date.now() - startTime) / 1000);
      updateTimerDisplay();
    }, 1000);
  
    showQuestion();
  }
  
  function showQuestion() {
    if (currentQuestion >= questions.length) {
        endQuiz();
        return;
    }

    const question = questions[currentQuestion];
    const questionDisplay = document.getElementById("hiragana-char");
    const optionsDiv = document.getElementById("options");
    const questionCount = document.getElementById("question-count");
    const feedback = document.getElementById("feedback");

    // Start transition
    questionCount.classList.add('transitioning');
    questionDisplay.style.opacity = "0";
    optionsDiv.style.opacity = "0";

    // Update content after brief delay
    setTimeout(() => {
        // Update question count with animation
        questionCount.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
        questionCount.classList.remove('transitioning');
        
        // Update question and options
        questionDisplay.textContent = question.char;
        feedback.textContent = "";
        
        // Prepare options
        optionsDiv.innerHTML = "";
        const shuffledOptions = shuffleArray([...question.options]);
        shuffledOptions.forEach((opt) => {
            const btn = document.createElement("button");
            btn.textContent = opt;
            btn.onclick = () => checkAnswer(opt);
            optionsDiv.appendChild(btn);
        });

        // Make all elements visible
        requestAnimationFrame(() => {
            questionDisplay.style.opacity = "1";
            optionsDiv.style.opacity = "1";
        });
    }, 300); // Matches the CSS transition duration
  }
  
  function checkAnswer(selected) {
    const correct = questions[currentQuestion].answer;
    const feedback = document.getElementById("feedback");
    const questionDisplay = document.getElementById("hiragana-char");
    const optionsDiv = document.getElementById("options");
    const questionCount = document.getElementById("question-count");

    if (selected === correct) {
        feedback.textContent = "✅ Correct!";
        score++;
    } else {
        feedback.textContent = `❌ Wrong! Correct answer was: ${correct}`;
    }

    // Prepare for next question
    currentQuestion++;
    
    // Start transition out
    questionCount.classList.add('transitioning');
    questionDisplay.style.opacity = "0";
    optionsDiv.style.opacity = "0";

    // Show next question after feedback
    setTimeout(() => {
        showQuestion();
    }, 1000);
  }
  
  function endQuiz() {
    clearInterval(timer);
    const finalTime = elapsedTime;
  
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";
    
    const minutes = Math.floor(finalTime / 60);
    const seconds = finalTime % 60;
    const timeString = minutes > 0 ? 
        `${minutes} minute${minutes !== 1 ? 's' : ''} and ${seconds} second${seconds !== 1 ? 's' : ''}` : 
        `${seconds} second${seconds !== 1 ? 's' : ''}`;

    document.getElementById("final-score").textContent = `Score: ${score} out of ${questions.length}`;
    document.getElementById("completion-time").textContent = `Time taken: ${timeString}`;
  
    saveScore(finalTime);
    updateLeaderboardDisplay();
  }
  
  function saveScore(completionTime) {
    const leaderboard = JSON.parse(localStorage.getItem("leaderboard") || "[]");
    leaderboard.push({
      name: playerName,
      score: score,
      time: completionTime
    });
  
    // Sort by score (descending) and then by time (ascending) for same scores
    leaderboard.sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      return a.time - b.time;
    });
  
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard.slice(0, 10))); // Keep top 10
  }
  
  function updateLeaderboardDisplay() {
    const tbody = document.querySelector("#leaderboard tbody");
    tbody.innerHTML = "";
    const leaderboard = JSON.parse(localStorage.getItem("leaderboard") || "[]");
  
    leaderboard.forEach((entry, index) => {
      const row = tbody.insertRow();
      row.insertCell(0).textContent = index + 1;  // Rank
      row.insertCell(1).textContent = entry.name;
      row.insertCell(2).textContent = entry.score;
      
      const minutes = Math.floor(entry.time / 60);
      const seconds = entry.time % 60;
      const timeString = minutes > 0 ? 
          `${minutes}m ${seconds}s` : 
          `${seconds}s`;
      row.insertCell(3).textContent = timeString;
    });
  }
  
  function restartQuiz() {
    document.getElementById("player-name").value = "";
    document.getElementById("instructions").style.display = "block";
    document.getElementById("result").style.display = "none";
  }
  
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  
  function updateTimerDisplay() {
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = elapsedTime % 60;
    const timeString = minutes > 0 ? 
        `${minutes}:${seconds.toString().padStart(2, '0')}` : 
        `${seconds}s`;
    document.getElementById("timer").textContent = `Time: ${timeString}`;
  }
  