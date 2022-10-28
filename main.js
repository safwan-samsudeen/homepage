const ROLES = ["Web Developer", "Programmer", "Blogger", "Student", "Reader"];

// Role shifting
let counter = 1;

function replaceRole() {
  // Start from the second role, and increment counter
  document.querySelector("#roles").textContent = ROLES[counter];
  counter++;
  // Reset counter at the last role
  if (counter === ROLES.length) {
    counter = 0;
  }
}

setInterval(replaceRole, 1500);

// Update navbar depending on scroll
const nav = document.getElementById("navbar");
const reachOut = document.getElementById("reach-out-btn");
const reachOutText = document.getElementById("reach-out-btn-text");
const makeLight = (navOnly = true) => {
  nav.classList.replace("text-dark", "text-light");
  if (!navOnly) {
    reachOut.classList.replace("btn-dark", "btn-light");
    reachOutText.classList.replace("text-light", "text-dark");
  }
};
const makeDark = () => {
  nav.classList.replace("text-light", "text-dark");
  reachOut.classList.replace("btn-light", "btn-dark");
  reachOutText.classList.replace("text-dark", "text-light");
};

window.onscroll = () => {
  if (115 < window.scrollY && window.scrollY < 174)
    // Navbar overlapping on "Safwan"
    makeLight();
  else if (229 < window.scrollY && window.scrollY < 294)
    // Navbar overlapping on "Samsudeen"
    makeLight();
  else if (window.scrollY > 569)
    // Scrolled past gradient
    makeLight(false);
  else makeDark();
};
