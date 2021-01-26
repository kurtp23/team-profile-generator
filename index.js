const inquirer = require(`inquirer`);
const fs = require(`fs`);
const questions = require(`./lib/questions.js`);

function addEmployee(answers) {
  if (answers.addEmployee === "Engineer") {
    inquirer.prompt(questions.engineerQuestions).then(handleAnswers);
  }
  if (answers.addEmployee === "Intern") {
    inquirer.prompt(questions.internQuestions).then(handleAnswers);
  }
}
function handleAnswers(answers) {
  inquirer.prompt(questions.addEmployee).then(addEmployee);
}
inquirer.prompt(questions.managerQuestions).then(handleAnswers);
