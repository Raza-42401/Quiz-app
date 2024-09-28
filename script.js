
var questions = [
    "What is the Capital of Pakistan?",
    "What is the second name of K-2?",
    "Which is the most important activity in Islam?",
    "Who is the actor in mission impossile movie?",
    "What is the boiling point of water in degrees Celsius?"
];

var answers = [
    "Islamabad",
    "Godwin Austin",
    "to offer Namaz",
    "Tom Cruise",
    "100"
];


var correctAnswers = 0;
var wrongAnswers = 0;

for (var i = 0; i < questions.length; i++) {
    let userAnswer = prompt(questions[i]);
    if (userAnswer === answers[i]) {
        correctAnswers++;
    } else {
        wrongAnswers++;
    }
}

const totalQuestions = questions.length;
const scorePercentage = (correctAnswers / totalQuestions) * 100;

alert(`You got ${correctAnswers} out of ${totalQuestions} correct!\nYour score: ${scorePercentage}%`);

if (scorePercentage >= 80) {
    alert("Grade: A - Excellent work!");
} else if (scorePercentage >= 60) {
    alert("Grade: B - Good job!");
} else if (scorePercentage >= 40) {
    alert("Grade: C - You passed!");
} else {
    alert("Grade: F - Better luck next time!");
}
