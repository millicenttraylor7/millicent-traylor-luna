// Create the body element from the document and store it in a variable
const body = document.body;

// Create a footer element
const footer = document.createElement("footer");

// Append the footer as the last child of the body
body.appendChild(footer);

// Create a Date object and get the current year
const today = new Date();
const thisYear = today.getFullYear();

// Create a new <p> element for the copyright
const copyright = document.createElement("p");
// Set te inner HTML with copyright symbol, your name and year
copyright.innerHTML = `&copy; Millicent Traylor ${thisYear}`;

// Append the <p> element to the <footer>
footer.appendChild(copyright);

footer.style.textAlign="center";

const skills = [
  "JavaScript",
  "HTML",
  "CSS",
  "Google Suite",
  "GitHub",
  "Git",
  "UI/UX Design",
  "Microsoft Office",
  "DOM",
  "API",
  "Node.JS",
  "Visual Studio"
];

// Select the <section> element with id "skills" and store it in a variable
const skillsSection = document.getElementById("Skills");

// Select the <ul> element inside the skillsSection
const skillsList = skillsSection.querySelector("ul");

// Loop through the skills array and create a <li> for each skill
for (let i = 0; i < skills.length; i++) {
  // Create a new <li> element for each skill
  const skill = document.createElement("li");

  // Set the inner text of the <li> to the current skill from the array
  skill.innerText = skills[i];

  // Append the <li> element to the <ul> skillsList
  skillsList.appendChild(skill);
}



