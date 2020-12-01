const readlineSync = require('readline-sync');
let chalk = require('chalk');
var score = 0;

const userName = readlineSync.question('Please enter your name? ');
console.log(`${chalk.green(`Welcome ${userName}`)}`);

console.log(' ');

console.log(
  `${chalk.bgCyan(
    "I welcome you to the world of Naruto. Let's see how much do you know about the Naruto Anime......."
  )}`
);
console.log(' ');

console.log(
  `${chalk.underline(
    'Here are the certains rules which will be followed through out the game:'
  )}`
);
console.log(
  `1. ${chalk.bgMagenta("For each correct answer you'll get 2 points.")}`
);
console.log(
  `2. ${chalk.bgMagenta("For each wrong answer you'll loose 1 points.")}`
);

console.log(' ');

console.log("Here's the leaderboard. Let's see if you can beat them...");

console.log('     NAMES  ||  SCORES     ');
console.log('-----------------------------');
var scoreBoard = [
  {
    name: 'Amir',
    score: 17,
  },
  {
    name: 'OuKi',
    score: 14,
  },
];

for (var i = 0; i < scoreBoard.length; i++) {
  console.log(`       ${scoreBoard[i].name}  ||  ${scoreBoard[i].score}     `);
  console.log('-----------------------------');
}

console.log(`${chalk.cyan.bold("Let's get started!!!!")}`);

var questionBank = [
  {
    question: 'Which Hokage sealed the nine-tailed fox inside Naruto?',
    answer: 'Fourth',
  },
  {
    question: 'Who tricked Naruto into stealing a sacred scroll?',
    answer: 'Mizuki',
  },
  {
    question: 'Which character can only use taijutsu?',
    answer: 'Rock Lee',
  },
  {
    question: 'Naruto first shows his nine-tails chakra when he fights who?',
    answer: 'Haku',
  },
  {
    question: "Sasuke's goal is gain enough power to kill whom?",
    answer: 'Uchiha Itachi',
  },
  {
    question: 'Which of the legendary sannin becomes the fifth Hokage?',
    answer: 'Tsunade',
  },
  {
    question: "What does 'Chidori' mean?",
    answer: 'one thousand birds',
  },
  {
    question: 'Every member of Akatsuki is a what?',
    answer: ' S Rank criminal',
  },
  {
    question:
      'What is the forbidden technique used by Rock Lee that he used on Dosu and Gaara?',
    answer: 'Primary Lotus',
  },
  {
    question: ' D-rank missions are usually given to what level of shinobi?',
    answer: 'Genin',
  },
];

function quiz(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (
    userAnswer == answer ||
    userAnswer == answer.toUpperCase() ||
    userAnswer == answer.toLowerCase()
  ) {
    console.log(`${chalk.green('Correct')}`);
    score += 2;
  } else {
    console.log(`${chalk.red('Incorrect')}`);
    score -= 1;
  }
}

for (var i = 0; i < questionBank.length; i++) {
  quiz(questionBank[i].question, questionBank[i].answer);
}

console.log(`Your score is: ${score}`);

scoreBoard.push({ name: `${userName}`, score: `${score}` });

function compare(a, b) {
  if (a.score > b.score) {
    return -1;
  }
  if (a.score < b.score) {
    return 1;
  }
  return 0;
}

scoreBoard.sort(compare);

console.log("Here's the final leaderboard. ");

console.log('     NAMES  ||  SCORES     ');
console.log('-----------------------------');

for (var i = 0; i < scoreBoard.length; i++) {
  console.log(`       ${scoreBoard[i].name}  ||  ${scoreBoard[i].score}     `);
  console.log('-----------------------------');
}
