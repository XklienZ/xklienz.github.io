const navbar = document.querySelector(".navbr-nv");
const listIcon = document.getElementById("list-icon");
const menuCard3 = document.querySelector(".menu-card3");
const floatBtn = document.querySelector(".float-btn");
const floatContainer = document.querySelector(".float-container");
const floatOverlay = document.querySelector(".float-overlay");

listIcon.onclick = () => {
  navbar.classList.toggle("active");
};

floatBtn.onclick = () => {
  floatContainer.classList.toggle("active");
};

function closeFloat(e) {
  if (!listIcon.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
  if (!floatContainer.contains(e.target) && !floatBtn.contains(e.target)) {
    floatContainer.classList.remove("active");
  }
}
document.addEventListener("click", function (e) {
  closeFloat(e);
});
