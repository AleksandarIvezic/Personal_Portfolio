let projectBtns = document.getElementsByClassName("btn-project");
let details = document.getElementsByClassName("project-details");
let previews = document.getElementsByClassName("project-preview");
let closeBtns = document.getElementsByClassName("close-details");
console.log(closeBtns[0]);
projectBtns = Array.from(projectBtns);
details = Array.from(details);
previews = Array.from(previews);
closeBtns = Array.from(closeBtns);

projectBtns.forEach((btn) => {
  btn.addEventListener("click", displayDetails);
});
closeBtns.forEach((btn) => {
  btn.addEventListener("click", closeDetails);
});

function displayDetails(e) {
  let index = projectBtns.indexOf(e.currentTarget);
  details[index].style.display = "block";
  previews[index].style.display = "none";
  console.log(e.target);
}
function closeDetails(e) {
  let index = closeBtns.indexOf(e.currentTarget);
  previews[index].style.display = "block";
  details[index].style.display = "none";
}
