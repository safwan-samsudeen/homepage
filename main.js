// Role shifting
const ROLES = ["Web Developer", "Programmer", "Blogger", "Student", "Reader"];
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
  // Change the color scheme when the user's almost scrolled past the gradient
  if (window.scrollY > visualViewport.height * 0.95)
    // Scrolled past gradient
    makeLight(false);
  else {
    makeDark()
  };
};

// Set padding to assume space of navbar
dummySpace = document.getElementById("dummy-space");
dummySpace.style.height = `${nav.offsetHeight}px`;