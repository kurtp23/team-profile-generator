const inquirer = require(`inquirer`);
const fs = require(`fs`);
const questions = require(`./lib/questions.js`);
const employee = require(`./lib/employee.js`);
const Manager = require(`./lib/manager.js`);
const Engineer = require(`./lib/engineer.js`);
const Intern = require(`./lib/intern.js`);
const generateHtml = require(`./lib/htmlGenerator.js`);
const teamMembers = [];

function addEmployee(answers) {
  if (answers.addEmployee === "Engineer") {
    inquirer.prompt(questions.engineerQuestions).then(handleEngineer);
  }
  if (answers.addEmployee === "Intern") {
    inquirer.prompt(questions.internQuestions).then(handleIntern);
  }
  if (answers.addEmployee === "End") {
    // console.log(generateHtml(teamMembers));
    fs.writeFileSync("dist/main.html", generateHtml(teamMembers));
  }
}
function handleAnswers(answers) {
  const newEmployee = new Manager(
    answers.name,
    answers.employeeId,
    answers.email,
    answers.officeNumber
  );

  teamMembers.push(newEmployee);
  //console.log(teamMembers);
  inquirer.prompt(questions.addEmployee).then(addEmployee);
}
function handleEngineer(answers) {
  const newEmployee = new Engineer(answers.name, answers.employeeId, answers.email, answers.github);

  teamMembers.push(newEmployee);
  console.log(teamMembers);
  inquirer.prompt(questions.addEmployee).then(addEmployee);
}
function handleIntern(answers) {
  const newEmployee = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
  teamMembers.push(newEmployee);
  //console.log(teamMembers);
  inquirer.prompt(questions.addEmployee).then(addEmployee);
}
inquirer.prompt(questions.managerQuestions).then(handleAnswers);
module.exports = {
  teamMembers,
};
