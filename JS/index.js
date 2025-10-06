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
// Message Form
// aelect the leave message form by name
const messageForm = document.forms["leave_message"];

//Add an event listener to handle "submit"
messageForm.addEventListener("submit",function(event) {
  // prevent the page default
  event.preventDefault();
      
  //Retrieve form field values
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  // Form handling
  console.log("Form submitted!");
  
  // Log values
  console.log("Name: ", usersName);
  console.log("Email: ", usersEmail);
  console.log("Message: ", usersMessage); 
  
  // Select the #Nessages section
  const messagesSection = document.getElementById("messages");
  
  // Select the<ul> inside the #Messages section
  const messagesList = messagesSection.querySelector("ul");

  // Create a new list item
  const newMessage = document.createElement("li");
  // Set the inner HTML
  newMessage.innerHTML=`<a href="mailto:${usersEmail}">${usersName}</a>: "wrote: " 
  <span>${usersMessage}</span>`;

  // Create a remove button
  const removeButton = document.createElement("button");
  removeButton.innerText ="Remove";
  removeButton.className = "remove-btn";
  removeButton.type = "button";

  // Add click event listener
  removeButton.addEventListener("click", function() {
  // find the <li>
  const entry = removeButton.parentNode;
  // Remove it 
  entry.remove();
  }); 

  // Append the remove button to the new message
  newMessage.appendChild(removeButton);

  // Append the new message to the message list
  messagesList.appendChild(newMessage);
  
  // Clear form after submission
  messageForm.reset();
});
// Project Section
document.addEventListener("DOMContentLoaded", () => {
  const projectSection = document.getElementById("projects");
  const projectList = projectSection.querySelector("ul");

  fetch("https://api.github.com/users/millicenttraylor7/repos")
    .then(response => response.json())
    .then(repos => {   
      if (repos.length === 0) {
        const message = document.createElement("li");
        message.innerText = "No repositories found.";
        projectList.appendChild(message);
        return;
      }

      for (let i = 0; i < repos.length; i++) {
        const project = document.createElement("li");
        project.innerText = repos[i].name;
        projectList.appendChild(project);
      }
    })
    .catch(error => {
      console.error("Error fetching repositories:", error);
      const message = document.createElement("li");
      message.innerText = "Failed to load projects. Please try again later.";
      projectList.appendChild(message);
    });
});
