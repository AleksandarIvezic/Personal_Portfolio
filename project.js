//Declare variables
let projectBtns = document.getElementsByClassName("btn-project");
let details = document.getElementsByClassName("project-details");
let previews = document.getElementsByClassName("project-preview");
let closeBtns = document.getElementsByClassName("close-details");
let images = document.getElementsByClassName("img");
let previewHeadings = document.getElementsByClassName("preview-heading");
let detailsHeadings = document.getElementsByClassName("details-heading");
const projects = ["Tic-Tac-Toe", "Covid-19 Tracking Project", "Group our Cakes", "Booking-vacations","Calculator", "Bujinkan web page"];
   
//Transform Html collections into arrays
projectBtns = Array.from(projectBtns);
details = Array.from(details);
previews = Array.from(previews);
closeBtns = Array.from(closeBtns);
images = Array.from(images);
previewHeadings = Array.from(previewHeadings);
detailsHeadings = Array.from(detailsHeadings);

//Give event listeners to the buttons
projectBtns.forEach((btn) => {
  btn.addEventListener("click", displayDetails);
});
closeBtns.forEach((btn) => {
  btn.addEventListener("click", closeDetails);
});
//Create functions
function displayDetails(e) {
  let index = projectBtns.indexOf(e.currentTarget);
  details[index].style.display = "block";
  previews[index].style.display = "none";
}
function closeDetails(e) {
  let index = closeBtns.indexOf(e.currentTarget);
  previews[index].style.display = "block";
  details[index].style.display = "none";
}
//Display project images and headings
for (let i=0; i<6; i++) {
  previews[i].style.background = "radial-gradient(rgba(59, 59, 59, 0.5) 70.44%, #000000 150%), url(imgs/Project-"+i+".png)";
  images[i].style.background = previews[i].style.background;
  previews[i].style.backgroundSize = "cover";
  images[i].style.backgroundSize = "cover";
  previewHeadings[i].innerText = projects[i];
  detailsHeadings[i].innerText = projects[i];
}