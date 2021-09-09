var read = require('readline-sync');
var score =0;
const chalk = require('chalk');


var questions = [
  {
  question: "Where do I live ",
  answer: "Hyderabad",
  },
  {
  question: "What is my fav place in India ",
  answer: "Visakhapatnam",
  },
  {
    question: "Who is my fav Avenger ",
    answer: "Iron Man",
  },
  {
    question: "Who is my fav DC superhero ",
    answer: "Batman",
  },
  {
    question: "Which social media app I use most ",
    answer: "Whatsapp"
  },
];



function play()
{
  var userName = read.question(chalk.blue("Whats your name "));
  console.log(chalk.blue("Welcome "+ chalk.white(userName) + ", lets check how much you know me \n\n"));
  call_quiz();
  console.log(chalk.underline.green.bold("Your Final score is "+ score + "/5"));
}


function call_quiz()
{
  for(var i=0;i<questions.length;i++)
    quiz(questions[i].question, questions[i].answer);
}


function quiz(question,answer)
{
  var userAnswer = read.question(question);

  if( userAnswer.toUpperCase() === answer.toUpperCase()) 
  {
    console.log(chalk.green.bold("right!! "));
    score = score + 1;
  }
  else
  {
    console.log(chalk.red.bold("wrong "));
    console.log(chalk.green.bold("Correct answer : ",chalk.underline(answer)));
  }
  
  console.log("current score: "+score + "\n");
}


play();