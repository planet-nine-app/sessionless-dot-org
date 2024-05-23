const btn1 = document.getElementById('btn1');
const sparklesWhite = document.getElementById('white-sparkles');
const sparklesBlack = document.getElementById('black-sparkles');
const btn2 = document.getElementById('btn2');
const wOpenBook = document.getElementById('w-open-book');
const bOpenBook = document.getElementById('b-open-book');
const btn3 = document.getElementById('btn3');
const sparklesWhite2 = document.getElementById('white-sparkles2');
const sparklesBlack2 = document.getElementById('black-sparkles2');
const btn4 = document.getElementById('btn4');
const whiteHeart = document.getElementById('white-hearts');
const blackHeart = document.getElementById('black-hearts');
const popupBg = document.getElementById("popup-bg");
const popup = document.getElementById("popup")
const btnClosePopup = document.getElementById("close-popup")

btn1.addEventListener('mouseover', () => {
  sparklesWhite.classList.add('visible');
  sparklesWhite.classList.remove('hidden');
  sparklesBlack.classList.add('hidden');
  sparklesBlack.classList.remove('visible');
});

btn1.addEventListener('mouseout', () => {
    sparklesWhite.classList.remove('visible');
    sparklesWhite.classList.add('hidden');
    sparklesBlack.classList.remove('hidden');
    sparklesBlack.classList.add('visible');
});

btn3.addEventListener('mouseover', () => {
    sparklesWhite2.classList.add('visible');
    sparklesWhite2.classList.remove('hidden');
    sparklesBlack2.classList.add('hidden');
    sparklesBlack2.classList.remove('visible');
  });
  
  btn3.addEventListener('mouseout', () => {
      sparklesWhite2.classList.remove('visible');
      sparklesWhite2.classList.add('hidden');
      sparklesBlack2.classList.remove('hidden');
      sparklesBlack2.classList.add('visible');
  });

btn2.addEventListener('mouseover', () => {
    wOpenBook.classList.add('visible');
    wOpenBook.classList.remove('hidden');
    bOpenBook.classList.add('hidden');
    bOpenBook.classList.remove('visible');
  });
  
  btn2.addEventListener('mouseout', () => {
        wOpenBook.classList.remove('visible');
    wOpenBook.classList.add('hidden');
    bOpenBook.classList.remove('hidden');
    bOpenBook.classList.add('visible');
  });
  
  btn4.addEventListener('mouseover', () => {
    whiteHeart.classList.add('visible');
    whiteHeart.classList.remove('hidden');
    blackHeart.classList.add('hidden');
    blackHeart.classList.remove('visible');
  });
  
  btn4.addEventListener('mouseout', () => {
      whiteHeart.classList.remove('visible');
      whiteHeart.classList.add('hidden');
      blackHeart.classList.remove('hidden');
      blackHeart.classList.add('visible');
  });

  btn4.addEventListener('click', () => {
    popupBg.classList.add('visible');
    popupBg.classList.remove('hidden');
    popup.classList.add('visible');
    popup.classList.remove('hidden');
  });

  btnClosePopup.addEventListener('click', () => {
    popupBg.classList.remove('visible');
    popupBg.classList.add('hidden');
    popup.classList.remove('visible');
    popup.classList.add('hidden');
  });