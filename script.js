const questions = [
    {
        question: "What habitat does the California Red-legged Frog primarily occupy?",
        options: ["Deserts", "High mountains", "Wetlands and streams", "Urban areas"],
        answer: "Wetlands and streams",
        source: "California Herps, californiaherps.com/identification/frogsid/frogs.id.html"
    },
    {
        question: "Which frog species is sensitive to altered water courses?",
        options: ["Pacific Tree Frog", "California Treefrog", "Foothill Yellow-legged Frog", "Sierra Nevada Yellow-legged Frog"],
        answer: "Foothill Yellow-legged Frog",
        source: "California Herps, californiaherps.com/identification/frogsid/frogs.id3.html"
    },
    {
        question: "Where can you primarily find the Sierra Nevada Yellow-legged Frog?",
        options: ["Urban parks", "Mountain lakes", "Coastal areas", "Deserts"],
        answer: "Mountain lakes",
        source: "Gone Froggin, gonefroggin.com/2016/09/26/frogs-toads-california"
    },
    {
        question: "What is a distinctive behavior of the Arroyo Toad?",
        options: ["Changes color frequently", "Lives in trees", "Burrows into the sand", "Migrates long distances"],
        answer: "Burrows into the sand",
        source: "SnakeTracks.com, snaketracks.com/frogs-in-california"
    },
    {
        question: "What unique feature is the Pacific Tree Frog known for?",
        options: ["Loud chorus calls", "Venomous skin", "Extremely long legs", "Ability to fly short distances"],
        answer: "Loud chorus calls",
        source: "National Park Service, nps.gov/samo/learn/nature/californiatreefrog.htm"
    },
    {
        question: "Which California frog is known for its impressive leaping abilities?",
        options: ["Sierra Nevada Yellow-legged Frog", "Arroyo Toad", "California Red-legged Frog", "Pacific Tree Frog"],
        answer: "California Red-legged Frog",
        source: "California Herps, californiaherps.com/identification/frogsid/frogs.id.html"
    },
    {
        question: "What is the primary diet of the Foothill Yellow-legged Frog?",
        options: ["Small fish", "Insects", "Algae", "Berries"],
        answer: "Insects",
        source: "California Herps, californiaherps.com/identification/frogsid/frogs.id3.html"
    },
    {
        question: "What major threat has contributed to the endangerment of the Sierra Nevada Yellow-legged Frog?",
        options: ["Habitat loss and disease", "Over-predation", "Climate change", "Pollution"],
        answer: "Habitat loss and disease",
        source: "Gone Froggin, gonefroggin.com/2016/09/26/frogs-toads-california"
    },
    {
        question: "Which feature is distinctive of the Arroyo Toad's appearance?",
        options: ["Bright red eyes", "Spotted skin", "Nocturnal burrowing", "Long, striped legs"],
        answer: "Nocturnal burrowing",
        source: "SnakeTracks.com, snaketracks.com/frogs-in-california"
    },
    {
        question: "How does the Pacific Tree Frog adapt to different environments?",
        options: ["By hibernating", "By changing its skin color", "By migrating", "By altering its diet"],
        answer: "By changing its skin color",
        source: "National Park Service, nps.gov/samo/learn/nature/californiatreefrog.htm"
    },
    {
        question: "What unique feature distinguishes the California Treefrog?",
        options: ["Its loud vocalizations", "Its ability to change color", "Its exceptionally long legs", "Its nocturnal habits"],
        answer: "Its ability to change color",
        source: "California Herps, californiaherps.com/identification/frogsid/frogs.id.html"
    },
    {
        question: "Which habitat is primarily occupied by the Foothill Yellow-legged Frog?",
        options: ["Desert areas", "High mountain lakes", "Streams and rivers", "Urban parks"],
        answer: "Streams and rivers",
        source: "California Herps, californiaherps.com/identification/frogsid/frogs.id3.html"
    },
    {
        question: "What is the conservation status of the Sierra Nevada Yellow-legged Frog?",
        options: ["Least Concern", "Endangered", "Vulnerable", "Near Threatened"],
        answer: "Endangered",
        source: "Gone Froggin, gonefroggin.com/2016/09/26/frogs-toads-california"
    },
    {
        question: "Which type of area does the Arroyo Toad prefer for its habitat?",
        options: ["Coastal streams", "Deep forests", "Urban areas", "Mountainous regions"],
        answer: "Coastal streams",
        source: "SnakeTracks.com, snaketracks.com/frogs-in-california"
    },
    {
        question: "What behavior is characteristic of the Pacific Tree Frog during mating season?",
        options: ["Loud chorus calls", "Color changing", "Migration to water bodies", "Digging burrows"],
        answer: "Loud chorus calls",
        source: "National Park Service, nps.gov/samo/learn/nature/californiatreefrog.htm"
    },
    {
        question: "Which frog is known for its distinctive red underside and powerful legs?",
        options: ["Pacific Tree Frog", "California Red-legged Frog", "Foothill Yellow-legged Frog", "Arroyo Toad"],
        answer: "California Red-legged Frog",
        source: "California Herps, californiaherps.com/identification/frogsid/frogs.id.html"
    },
    {
        question: "The Foothill Yellow-legged Frog's breeding is closely linked to what natural event?",
        options: ["Full moon", "Seasonal rains", "Forest fires", "River flooding"],
        answer: "Seasonal rains",
        source: "California Herps, californiaherps.com/identification/frogsid/frogs.id3.html"
    },
    {
        question: "What adaptation helps the Sierra Nevada Yellow-legged Frog survive in its high-altitude habitat?",
        options: ["Webbed feet", "Toxic skin", "Ability to hibernate", "Unique breeding cycle"],
        answer: "Unique breeding cycle",
        source: "Gone Froggin, gonefroggin.com/2016/09/26/frogs-toads-california"
    },
    {
        question: "Arroyo Toads are primarily active during which part of the day?",
        options: ["Morning", "Afternoon", "Evening", "Night"],
        answer: "Night",
        source: "SnakeTracks.com, snaketracks.com/frogs-in-california"
    },
    {
        question: "The Pacific Tree Frog can be predominantly found in what type of ecosystem?",
        options: ["Deserts", "Mountainous regions", "Urban settings", "Wetlands"],
        answer: "Wetlands",
        source: "National Park Service, nps.gov/samo/learn/nature/californiatreefrog.htm"
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
            ${q.options.map(option => `
            <div class="flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer border-black/10 rounded-xl bg-black/5">
                <label class="ml-6 text-black"><input type="radio" name="q${index}" value="${option}">${option}</input></label>
            </div>`).join('')}
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
            const correctLabel = document.querySelector(`input[value="${q.answer}"]`).closest('label');
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
