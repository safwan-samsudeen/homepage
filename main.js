const ROLES = ["Web Developer", "Programmer", "Blogger", "Student", "Reader"];
const role_n = ROLES.length;

var counter = 0;

function replaceRole() {
    document.querySelector("#roles").textContent = ROLES[counter];
    counter++;
    if (counter == role_n) {
        counter = 0;
    }
}
setInterval(replaceRole, 1500);