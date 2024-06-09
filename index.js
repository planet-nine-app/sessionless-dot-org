const btnDemo = document.getElementById("btnDemo");
const sparklesWhite = document.getElementById("white-sparkles");
const sparklesBlack = document.getElementById("black-sparkles");
const btnLearnMore = document.getElementById("btnLearnMore");
const wOpenBook = document.getElementById("w-open-book");
const bOpenBook = document.getElementById("b-open-book");
const btnGetResources = document.getElementById("btnGetResources");
const sparklesWhite2 = document.getElementById("white-sparkles2");
const sparklesBlack2 = document.getElementById("black-sparkles2");
const btnLoveForms = document.getElementById("btnLoveForms");
const whiteHeart = document.getElementById("white-hearts");
const blackHeart = document.getElementById("black-hearts");
const popupBg = document.getElementById("popup-bg");
const popup = document.getElementById("popup");

const balloons = () => {
  window.alert("put balloons here");
};

btnDemo.addEventListener("mouseover", () => {
  sparklesWhite.classList.add("visible");
  sparklesWhite.classList.remove("hidden");
  sparklesBlack.classList.add("hidden");
  sparklesBlack.classList.remove("visible");
});

btnDemo.addEventListener("mouseout", () => {
  sparklesWhite.classList.remove("visible");
  sparklesWhite.classList.add("hidden");
  sparklesBlack.classList.remove("hidden");
  sparklesBlack.classList.add("visible");
});

btnDemo.addEventListener("onClick", () => {
  const uuid = window.localStorage.getItem("uuid");
  if(!uuid) {
    window.alert("Ah, you have yet to register with us!");
    return;
  }
  balloons();
});

btnGetResources.addEventListener("mouseover", () => {
  sparklesWhite2.classList.add("visible");
  sparklesWhite2.classList.remove("hidden");
  sparklesBlack2.classList.add("hidden");
  sparklesBlack2.classList.remove("visible");
});

btnGetResources.addEventListener("mouseout", () => {
  sparklesWhite2.classList.remove("visible");
  sparklesWhite2.classList.add("hidden");
  sparklesBlack2.classList.remove("hidden");
  sparklesBlack2.classList.add("visible");
});

btnLearnMore.addEventListener("mouseover", () => {
  wOpenBook.classList.add("visible");
  wOpenBook.classList.remove("hidden");
  bOpenBook.classList.add("hidden");
  bOpenBook.classList.remove("visible");
});

btnLearnMore.addEventListener("mouseout", () => {
  wOpenBook.classList.remove("visible");
  wOpenBook.classList.add("hidden");
  bOpenBook.classList.remove("hidden");
  bOpenBook.classList.add("visible");
});

btnLoveForms.addEventListener("mouseover", () => {
  whiteHeart.classList.add("visible");
  whiteHeart.classList.remove("hidden");
  blackHeart.classList.add("hidden");
  blackHeart.classList.remove("visible");
});

btnLoveForms.addEventListener("mouseout", () => {
  whiteHeart.classList.remove("visible");
  whiteHeart.classList.add("hidden");
  blackHeart.classList.remove("hidden");
  blackHeart.classList.add("visible");
});

btnLoveForms.addEventListener("click", () => {
  popupBg.classList.add("visible");
  popupBg.classList.remove("hidden");
  popup.classList.add("visible");
  popup.classList.remove("hidden");
});

