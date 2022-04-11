const mobileNav = document.querySelector(".nav-mobile");
const menuButton = document.querySelector("#menu-button");
const arrowButton = document.querySelector("#arrow-up");

const showMobMenu = () => {
  if (mobileNav.style.display === "flex") {
    mobileNav.style.display = "none";
  } else {
    mobileNav.style.display = "flex";
  }
};

window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    arrowButton.style.display = "block";
    arrowButton.style.bottom = document.body.clientHeight + 15;
  } else {
    arrowButton.style.display = "none";
  }
};

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

menuButton.addEventListener("click", showMobMenu);
arrowButton.addEventListener("click", getToTop);
