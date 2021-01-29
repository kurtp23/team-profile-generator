const inquirer = require(`inquirer`);

const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter team manager's name.",
  },
  {
    type: "input",
    name: "employeeId",
    message: "Enter employee Id.",
  },
  {
    type: "input",
    name: "email",
    message: "Enter manager's email adress.",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Enter manager's office number",
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter team engineer's name.",
  },
  {
    type: "input",
    name: "employeeId",
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
    name: "name",
    message: "Enter intern's name.",
  },
  {
    type: "input",
    name: "employeeId",
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
    choices: ["Engineer", "Intern", "End"],
  },
];
// const newEmployee = [
//   {
//     type: "input",
//     name: "name",
//     message: "Enter employee's name.",
//   },
//   {
//     type: "input",
//     name: "email",
//     message: "Enter employee's email.",
//   },
//   {
//     type: "input",
//     name: "eId",
//     message: "Enter employee's id number.",
//   },
// ];
module.exports = {
  managerQuestions,
  engineerQuestions,
  internQuestions,
  addEmployee,
  //   newEmployee,
};
