
let optionsHello = {
  strings: ['Привет!<br><span class="hello__title">Меня зовут Егор Исаев <br>Я - <span>Web разработчик</span></span>'],
typeSpeed: 80,
showCursor: true,

};

let typed = new Typed("#typed", optionsHello);

let optionsButton = {
  strings: ['<a href="#" class="hello__button __button"><span class="__button-line __button-line--top"></span><span class="__button-line __button-line--right"></span><span class="__button-line __button-line--bottom"></span><span class="__button-line __button-line--left"></span>Написать мне</a>'],
typeSpeed: 100,
showCursor: false,
startDelay: 6000,
};

let typedButton = new Typed("#typedButton", optionsButton);


const headerBurger = document.getElementById("headerBurger");
const headerMain = document.getElementById("headerMain");

headerBurger.addEventListener("click", function() {
	headerBurger.classList.toggle("active-burger");
	headerMain.classList.toggle("active-burger--main");
});
