const navbar = document.querySelector(".navbr-nv");
const listIcon = document.getElementById("list-icon");

listIcon.onclick = () => {
  navbar.classList.toggle("active");
};

document.addEventListener("click", function (e) {
  if (!listIcon.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});
