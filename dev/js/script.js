
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

const body = document.getElementById("body");
const header = document.querySelector(".header");
const headerBurger = document.getElementById("headerBurger");
const headerMain = document.getElementById("headerMain");


headerBurger.addEventListener("click", function() {
	headerBurger.classList.toggle("active-burger");
	headerMain.classList.toggle("active-burger--main");
	body.classList.toggle("overflow-hidden")
});

addEventListener("scroll", () => {
	let scroll = window.pageYOffset;

	if (scroll > 100) {
		header.classList.add("header-opacity");
	} else {
		header.classList.remove("header-opacity");
	}
});

AOS.init({
	// Global settings:
	disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
	initClassName: 'aos-init', // class applied after initialization
	animatedClassName: 'aos-animate', // class applied on animation
	useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
	
  
	// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	offset: 100, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 1500, // values from 0 to 3000, with step 50ms
	easing: 'ease', // default easing for AOS animations
	once: false, // whether animation should happen only once - while scrolling down
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });
