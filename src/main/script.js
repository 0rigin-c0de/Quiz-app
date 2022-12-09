const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [];

let url = fetch(
  "https://opentdb.com/api.php?amount=50&category=9&type=multiple"
);
url
  .then((res) => res.json())
  .then((d) => {
    console.log({ d });
  });
