const menuButton = document.querySelector("#menu-button");
const arrowButton = document.querySelector("#arrow-up");
const navContainer = document.querySelector("nav");

const showMobMenu = () => {
  if (navContainer.classList.contains("responsive")) {
    navContainer.classList.remove("responsive");
  } else {
    navContainer.classList.add("responsive");
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
