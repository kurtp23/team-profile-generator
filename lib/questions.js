const inquirer = require(`inquirer`);

const managerQuestions = [
  {
    type: "input",
    name: "mName",
    message: "Enter team manager's name.",
  },
  {
    type: "input",
    name: "employeeID",
    message: "Enter employee Id.",
  },
  {
    type: "input",
    name: "email",
    message: "Enter manager's email adress.",
  },
  {
    type: "input",
    name: "officsNumber",
    message: "Enter manager's office number",
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "eName",
    message: "Enter team engineer's name.",
  },
  {
    type: "input",
    name: "employeeID",
    message: "Enter employee Id.",
  },
  {
    type: "input",
    name: "email",
    message: "Enter engineer's email adress.",
  },
  {
    type: "input",
    name: "github",
    message: "Enter engineer's GitHUb username",
  },
];
const internQuestions = [
  {
    type: "input",
    name: "iName",
    message: "Enter team intern's name.",
  },
  {
    type: "input",
    name: "employeeID",
    message: "Enter employee Id.",
  },
  {
    type: "input",
    name: "email",
    message: "Enter intern's email adress.",
  },
  {
    type: "input",
    name: "school",
    message: "Enter intern's school",
  },
];
const addEmployee = [
  {
    type: "list",
    name: "addEmployee",
    message: "Add another employee",
    choices: ["Engineer", "Intern"],
  },
];

module.exports = {
  managerQuestions,
  engineerQuestions,
  internQuestions,
  addEmployee,
};
