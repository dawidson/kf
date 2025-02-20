let currentQuestionIndex = 0;
let score = 0;
let usedQuestions = new Set();
const userAnswers = [];
const maxQuestions = 20; // Maksymalna liczba pytań w teście

function startTest() {
    console.log("Test rozpoczęty");
    document.getElementById("start-button").style.display = "none";
    document.getElementById("question-container").style.display = "block";
    nextQuestion();
}

function nextQuestion() {
    if (currentQuestionIndex < maxQuestions && currentQuestionIndex < questions.length) {
        const questionIndex = getRandomQuestionIndex();
        console.log("Wybrane pytanie:", questionIndex);
        const questionData = questions[questionIndex];
        document.getElementById("question").innerText = questionData.question;
        document.getElementById("question-counter").innerText = `Pytanie ${currentQuestionIndex + 1} z ${Math.min(questions.length, maxQuestions)}`;

        const questionImage = document.getElementById("question-image");
        if (questionData.image) {
            questionImage.src = questionData.image;
            questionImage.style.display = "block";
        } else {
            questionImage.style.display = "none";
        }

        const answersDiv = document.getElementById("answers");
        answersDiv.innerHTML = ""; // Czyści poprzednie odpowiedzi
        document.getElementById("feedback").innerText = "";

        const shuffledAnswers = shuffleArray(questionData.answers); // Losowe ustawianie odpowiedzi

        shuffledAnswers.forEach(answer => {
            const button = document.createElement("button");
            button.innerText = answer.text;
            button.className = "answer-button";
            button.onclick = () => {
                selectAnswer(questionData, answer.text, answer.correct);
                nextQuestion(); // Przejdź do następnego pytania po kliknięciu odpowiedzi
            };
            answersDiv.appendChild(button);
        });

        usedQuestions.add(questionIndex);
        currentQuestionIndex++;
    } else {
        showResult();
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function getRandomQuestionIndex() {
    let index;
    do {
        index = Math.floor(Math.random() * questions.length);
    } while (usedQuestions.has(index));
    return index;
}

function selectAnswer(questionData, answer, isCorrect) {
    if (isCorrect) {
        score++;
        document.getElementById("feedback").innerText = "Prawidłowa odpowiedź!";
        document.getElementById("feedback").style.color = "green";
    } else {
        document.getElementById("feedback").innerText = "Nieprawidłowa odpowiedź.";
        document.getElementById("feedback").style.color = "red";
    }

    userAnswers.push({ question: questionData.question, answer, isCorrect, correctAnswer: questionData.answers.find(a => a.correct).text, image: questionData.image });
    console.log("Dodano odpowiedź użytkownika:", userAnswers[userAnswers.length - 1]);
}

function showResult() {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";
    const percentage = (score / Math.min(questions.length, maxQuestions)) * 100;
    document.getElementById("result").innerText = `Twój wynik: ${score} z ${Math.min(questions.length, maxQuestions)} (${percentage.toFixed(2)}%)`;

    const summaryDiv = document.getElementById("summary");
    summaryDiv.innerHTML = "<h3>Podsumowanie:</h3>";

    // Najpierw dodaj pytania z nieprawidłowymi odpowiedziami
    summaryDiv.innerHTML += "<h4>Pytania z nieprawidłowymi odpowiedziami:</h4>";
    let incorrectAnswers = userAnswers.filter(item => !item.isCorrect);
    incorrectAnswers.forEach((item, index) => {
        summaryDiv.innerHTML += getSummaryItemHtml(item, "red");
        if (index < incorrectAnswers.length - 1) {
            summaryDiv.innerHTML += `<hr class="summary-hr">`;
        }
    });

    // Następnie dodaj pytania z prawidłowymi odpowiedziami
    summaryDiv.innerHTML += "<h4>Pytania z prawidłowymi odpowiedziami:</h4>";
    let correctAnswers = userAnswers.filter(item => item.isCorrect);
    correctAnswers.forEach((item, index) => {
        summaryDiv.innerHTML += getSummaryItemHtml(item, "green");
        if (index < correctAnswers.length - 1) {
            summaryDiv.innerHTML += `<hr class="summary-hr">`;
        }
    });

    document.getElementById("restart-button").style.display = "block";
}

function getSummaryItemHtml(item, color) {
    const imageHtml = item.image ? `<br><img src="${item.image}" style="max-width: 100%;">` : "";
    return `<p style="color: ${color};" class="summary-question">${item.question}${imageHtml}<br><br>Prawidłowa odpowiedź: ${item.correctAnswer}</p>`;
}

function restartTest() {
    document.getElementById("result-container").style.display = "none";
    document.getElementById("start-button").style.display = "block";
    currentQuestionIndex = 0;
    score = 0;
    usedQuestions = new Set();
    userAnswers.length = 0; // Czyści tablicę odpowiedzi użytkownika
    console.log("Test uruchomiony ponownie");
}
