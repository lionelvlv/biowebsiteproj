const questions = [
    {
        question: "Which of these is the state flower of California?",
        options: ["Rose", "Tulip", "Golden Poppy", "Sunflower"],
        answer: "Golden Poppy"
    }
];


// Shuffle and display random questions
document.addEventListener('DOMContentLoaded', function() {
    getRandomQuestions(questions);
    document.getElementById('submitQuiz').addEventListener('click', checkAnswers);
});

function getRandomQuestions(questionsArray, numQuestions = 5) {
    const shuffled = questionsArray.sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffled.slice(0, numQuestions);

    const quizSection = document.getElementById('quiz');
    selectedQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `
            <p>${q.question}</p>
            ${q.choices.map(choice => `<label><input type="radio" name="q${index}" value="${choice}">${choice}</label>`).join('')}
        `;
        quizSection.appendChild(questionDiv);
    });
}


function checkAnswers() {
    let correctCount = 0; // To keep track of the number of correct answers
    
    questions.forEach((q, index) => {
        // Get the user's answer
        const answer = document.querySelector(`input[name="q${index}"]:checked`);

        // Find the parent question div
        const questionDiv = answer ? answer.closest('div') : null;
        
        // Highlight the correct answer
        const correctLabel = questionDiv.querySelector(`input[value="${q.answer}"]`).closest('label');
        correctLabel.style.backgroundColor = "#a4f9a4"; // Green background for the correct answer

        // Check if user's answer is correct
        if (answer && answer.value === q.answer) {
            correctCount++;
        } else if (answer) {
            answer.closest('label').style.backgroundColor = "#f9a4a4"; // Red background for the wrong answer
        }
    });

    // Display the score
    const scoreDiv = document.createElement('div');
    scoreDiv.textContent = `You got ${correctCount} out of ${questions.length} correct!`;
    document.getElementById('quiz').appendChild(scoreDiv);

    // Hide the submit button and show a "Try Again" button
    document.getElementById('submitQuiz').style.display = "none";

    const retryButton = document.createElement('button');
    retryButton.textContent = "Try Again";
    retryButton.addEventListener('click', function() {
        location.reload(); // This will reload the page, giving a fresh quiz
    });
    document.getElementById('quiz').appendChild(retryButton);
}

