const ROLES = ["Web Developer", "Programmer", "Blogger", "Student", "Reader"];
const role_n = ROLES.length;

// Role shifting
var counter = 1;

function replaceRole() {
  // Start from the second role, and increment counter
  document.querySelector("#roles").textContent = ROLES[counter];
  counter++;
  // Reset counter at the last role
  if (counter == role_n) {
    counter = 0;
  }
}
setInterval(replaceRole, 1500);

