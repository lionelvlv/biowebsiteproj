const questions = [
    {
        question: "Which of these is the state flower of California?",
        options: ["Rose", "Tulip", "Golden Poppy", "Sunflower"],
        answer: "Golden Poppy"
    },
    {
        question: "Which mammal is known as the state marine mammal of California?",
        options: ["California Sea Lion", "Blue Whale", "Dolphin", "Orca"],
        answer: "California Sea Lion"
    },
    {
        question: "Which is the largest tree by volume in California?",
        options: ["Douglas Fir", "California Redwood", "Giant Sequoia", "Oak"],
        answer: "Giant Sequoia"
    },
    {
        question: "Which large marine mammal is known to migrate along the California coast?",
        options: ["Orca", "Blue Whale", "Manatee", "Dolphin"],
        answer: "Blue Whale"
    },
    {
        question: "The California condor is known as one of the world's...",
        options: ["Smallest birds", "Most colorful birds", "Rarest birds", "Loudest birds"],
        answer: "Rarest birds"
    },
    {
        question: "The California Dogface Butterfly is named for...",
        options: ["Its bark", "The pattern on its wings", "Its diet", "Its size"],
        answer: "The pattern on its wings"
    },
    {
        question: "What is the state freshwater fish of California?",
        options: ["Golden Trout", "Salmon", "Bass", "Bluegill"],
        answer: "Golden Trout"
    },
    {
        question: "Which desert covers a significant portion of southeastern California?",
        options: ["Mojave Desert", "Sonoran Desert", "Atacama Desert", "Kalahari Desert"],
        answer: "Mojave Desert"
    },
    {
        question: "Which is the tallest and fastest bird of prey found in California?",
        options: ["Golden Eagle", "Peregrine Falcon", "Bald Eagle", "Red-tailed Hawk"],
        answer: "Peregrine Falcon"
    },
    {
        question: "Which reptile is known as the state reptile of California?",
        options: ["Desert Tortoise", "Green Anole", "Gila Monster", "California King Snake"],
        answer: "Desert Tortoise"
    },
    {
        question: "Which is the state insect of California?",
        options: ["Honeybee", "Ladybug", "Monarch Butterfly", "Praying Mantis"],
        answer: "California Dogface Butterfly"
    },
    {
        question: "Which tree is known to live for thousands of years in California?",
        options: ["Palm", "Bristlecone Pine", "Eucalyptus", "Cypress"],
        answer: "Bristlecone Pine"
    }
];

document.addEventListener('DOMContentLoaded', function() {
    getRandomQuestions(questions, 10);
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
            ${q.options.map(option => `<label><input type="radio" name="q${index}" value="${option}">${option}</label>`).join('')}
        `;
        quizSection.appendChild(questionDiv);
    });
}

function checkAnswers() {
    let correctCount = 0;

    questions.forEach((q, index) => {
        const answer = document.querySelector(`input[name="q${index}"]:checked`);
        const questionDiv = answer ? answer.closest('div') : null;
        
        if(questionDiv) {
            const correctLabel = questionDiv.querySelector(`input[value="${q.answer}"]`).closest('label');
            correctLabel.style.backgroundColor = "#a4f9a4";

            if (answer.value === q.answer) {
                correctCount++;
            } else {
                answer.closest('label').style.backgroundColor = "#f9a4a4";
            }
        }
    });

    const scoreDiv = document.createElement('div');
    scoreDiv.textContent = `You got ${correctCount} out of ${questions.length} correct!`;
    document.getElementById('quiz').appendChild(scoreDiv);

    document.getElementById('submitQuiz').style.display = "none";

    const retryButton = document.createElement('button');
    retryButton.textContent = "Try Again";
    retryButton.addEventListener('click', function() {
        location.reload();
    });
    document.getElementById('quiz').appendChild(retryButton);
}
