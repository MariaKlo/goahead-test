const firstScreen = document.querySelector(".first-screen");
const secondScreen = document.querySelector(".second-screen");

setTimeout(() => {
  firstScreen.classList.add("visuallyhidden");
  firstScreen.addEventListener("transitionend", function (e) {
    firstScreen.classList.add("hidden");
    secondScreen.classList.add("show-second-screen");
  });
}, 4000);
