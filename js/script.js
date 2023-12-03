// Toggle hamburger menu
const navbarExtra = document.querySelector(".navbar-extra");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const toggleClose1 = document.querySelector(".line-1");
const toggleClose2 = document.querySelector(".line-2");
const toggleClose3 = document.querySelector(".line-3");

document.querySelector(".hamburger-menu").onclick = () => {
  navbarExtra.classList.toggle("active");
  toggleClose1.classList.toggle("active");
  toggleClose2.classList.toggle("active");
  toggleClose3.classList.toggle("active");
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
