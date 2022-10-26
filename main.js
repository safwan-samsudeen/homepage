const ROLES = ["Web Developer", "Programmer", "Blogger", "Student", "Reader"];
const role_n = ROLES.length;

var counter = 0;

function replaceRole() {
    counter++;
    document.querySelector("#roles").textContent = ROLES[counter];
    if(counter == role_n) {
        counter = 0;
    }
}
setInterval(replaceRole, 1500);