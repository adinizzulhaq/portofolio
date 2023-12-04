// Toggle hamburger menu
const navbarExtra = document.querySelector(".navbar-extra");
const hamburgerMenu = document.querySelector(".hamburger-menu");

document.querySelector(".hamburger-menu").onclick = () => {
  navbarExtra.classList.toggle("active");
  hamburgerMenu.classList.toggle("toggle-close");
};

document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarExtra.contains(e.target)) {
    navbarExtra.classList.remove("active");
  }
});

// Clear contact form
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};
