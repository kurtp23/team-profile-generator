const team = require(`../index`);
const fs = require(`fs`);

function generateHtml(team) {
  let homeHtml = `
<!DOCTYPE html>

<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>team generator</title>
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
    />
  </head>
  <body>
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo center">team</a>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <!-- <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">JavaScript</a></li> -->
        </ul>
      </div>
    </nav>
    <div id="team" class="row">
`;

  team.forEach((employee) => {
    homeHtml =
      homeHtml +
      `
    
          <div class="col s12 m4 13">
            <div class="card blue-grey lighten-5 hoverable">
              <div class="card-content">
                <span class="card-title">${employee.getName()}</span>
                <p>
                ${employee.getRole() === "Manager" ? employee.getRole() : ""}
                ${employee.getRole() === "Engineer" ? employee.getRole() : ""}
                ${employee.getRole() === "Intern" ? employee.getRole() : ""}
                </p>
                <p>
                ID: ${employee.getId()}
                </p>
                <p>
                ${
                  employee.getRole() === "Manager"
                    ? "Office Number: " + employee.getOfficeNumber()
                    : ""
                }
                ${
                  employee.getRole() === "Engineer" ? "GitHub Profile: " + employee.getGitHub() : ""
                }
                ${employee.getRole() === "Intern" ? "School: " + employee.getSchool() : ""}
                </p>
                
              </div>
              <div class="card-action">
                <p></p>
                <a href="${employee.getEmail()}">${employee.getEmail()}</a>
              </div>
            </div>
          </div>
        
    `;
  });
  homeHtml =
    homeHtml +
    `</div>


<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
<script src="cards.js" async defer></script>
</body>
</html>
`;
  return homeHtml;
}

module.exports = generateHtml;
//   (employee.getRole()=== "Manager"){
//   employee.getOfficeNumber()
// }
