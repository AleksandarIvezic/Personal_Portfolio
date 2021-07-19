let projectBtns = document.getElementsByClassName("btn-project");
let details = document.getElementsByClassName("project-details");
let previews = document.getElementsByClassName("project-preview");
let closeBtns = document.getElementsByClassName("close-details");
let images = document.getElementsByClassName("img");

projectBtns = Array.from(projectBtns);
details = Array.from(details);
previews = Array.from(previews);
closeBtns = Array.from(closeBtns);
images = Array.from(images);

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
}
function closeDetails(e) {
  let index = closeBtns.indexOf(e.currentTarget);
  previews[index].style.display = "block";
  details[index].style.display = "none";
}
for (let i=0; i<6; i++) {
  previews[i].style.background = "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 48.44%, #000000 100%), url(imgs/Project-"+i+".png)";
  images[i].style.background = previews[i].style.background;
  previews[i].style.backgroundSize = "cover";
  images[i].style.backgroundSize = "cover";
}