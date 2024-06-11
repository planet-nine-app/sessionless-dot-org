import * as flames from './flames.js';
import * as balloonsEffect from './balloons.js';
import sessionless from 'sessionless-node';
const btnDemo = document.getElementById("btnDemo");
const sparklesWhite = document.getElementById("white-sparkles");
const sparklesBlack = document.getElementById("black-sparkles");
const btnSessionless = document.getElementById("btnSessionless");
const form = document.getElementById("imgForm");
const canvas = document.getElementById("canvas");
const btnLearnMore = document.getElementById("btnLearnMore");
const wOpenBook = document.getElementById("w-open-book");
const bOpenBook = document.getElementById("b-open-book");
const btnGetResources = document.getElementById("btnGetResources");
const sparklesWhite2 = document.getElementById("white-sparkles2");
const sparklesBlack2 = document.getElementById("black-sparkles2");
const btnLoveForms = document.getElementById("btnLoveForms");
const whiteHeart = document.getElementById("white-hearts");
const blackHeart = document.getElementById("black-hearts");
const heroText = document.getElementById("heroText");
const popupBg = document.getElementById("popup-bg");
const popup = document.getElementById("popup");

if(window.localStorage.getItem('uuid')) {
  btnSessionless.innerText = "Start over";
  form.style.visibility = "hidden";
  canvas.style.visibility = "hidden";
}
if(window.location.href.indexOf('getmetheballoons') !== -1) {
  balloonsEffect.balloons();
}

const balloons = () => {
  console.log("balloon it up!");
  heroText.innerText += "\nAnd now there are balloons because you are 'signed in' 🎈";
  balloonsEffect.balloons();
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

btnDemo.addEventListener("click", () => {
  const uuid = window.localStorage.getItem("uuid");
  if(!uuid) {
    window.alert("Ah, you have yet to register with us!");
    return;
  }
  balloons();
});

/**
 * So you probably don't want to do this in production (I mean, I've seen worse that's for sure).
 * Storing sensitive things in localStorage makes you vulnerable to XSS and man-in-the-browser attacks.
 * This is offered here as a quick example of how this could work. Check the Sessionless
 * repo for more examples that are closer to what you'll probably want.
 */

const saveKeys = (keys) => {
  window.localStorage.setItem("keys", JSON.stringify(keys));
};

const getKeys = () => {
  const keyString = window.localStorage.getItem("keys");
  return JSON.parse(keyString);
};

btnSessionless.addEventListener("click", async () => {
  if(window.localStorage.getItem("uuid")) {
    window.localStorage.clear();
    btnSessionless.innerText = '⚡️Register with sessionless⚡️';
    window.alert("You have 'signed out'");
    return;
  }
  console.log("let's go!");
  const keys = await sessionless.generateKeys(saveKeys, getKeys);
  const payload = {
    timestamp: new Date().getTime() + '',
    pubKey: keys.pubKey
  };
  payload.signature = await sessionless.sign(JSON.stringify(payload));
  const options = {
    method: 'put',
    body: JSON.stringify(payload)
  };
  const response = await window.fetch('https://thirsty-gnu-80.deno.dev/user/create', options);
  const uuidObj = await response.json();
  window.localStorage.setItem("uuid", uuidObj.uuid);
  heroText.innerHTML += `\nNow you have a unique id: ${uuidObj.uuid}, and keys: \nprivateKey: ${keys.privateKey}\npubKey: ${keys.pubKey}`;
  window.alert("Aww yeah! Now you're registered. Try that demo again.");
});

canvas.addEventListener("click", () => {
  console.log("burn it up!");
  heroText.innerHTML = "PSYCH! There's no need for forms with Sessionless!";
  flames.setAflame(form);
  //form.classList.add("burn");
console.log(form);
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

