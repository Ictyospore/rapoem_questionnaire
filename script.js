// Define your questions and answers
const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Text Markup Language",
            "High Tech Modern Language", 
            "Hyper Transfer Markup Language"
        ],
        correct: 0
    },
    {
        question: "Which tag creates a link in HTML?",
        answers: [
            "<link>",
            "<a>",
            "<href>"
        ],
        correct: 1
    },
    {
        question: "What year was JavaScript created?",
        answers: [
            "1990",
            "1995", 
            "2000"
        ],
        correct: 1
    }
];

// Function to display all questions
function displayQuestions() {
    const container = document.getElementById('questionnaire');
    
    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        
        let buttonsHTML = '';
        question.answers.forEach((answer, answerIndex) => {
            buttonsHTML += `<button onclick="checkAnswer(${index}, ${answerIndex})">${answer}</button>`;
        });
        
        questionDiv.innerHTML = `
            <h3>Question ${index + 1}: ${question.question}</h3>
            ${buttonsHTML}
            <div id="result-${index}" class="result"></div>
        `;
        
        container.appendChild(questionDiv);
    });
}

// Function to check answers
function checkAnswer(questionIndex, answerIndex) {
    const resultDiv = document.getElementById(`result-${questionIndex}`);
    const correctIndex = questions[questionIndex].correct;
    
    if (answerIndex === correctIndex) {
        resultDiv.innerHTML = '<font color="#00FF00">✅ Correct! Well done!</font>';
    } else {
        const correctAnswer = questions[questionIndex].answers[correctIndex];
        resultDiv.innerHTML = `<font color="#FF0000">❌ Wrong! The correct answer is: ${correctAnswer}</font>`;
    }
}

// Start the questionnaire when page loads
window.onload = displayQuestions;