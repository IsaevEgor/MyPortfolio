/*
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
*/

document.addEventListener('DOMContentLoaded', function () {
	let form = document.getElementById("form");
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);

		let formData = new FormData(form);
		formData.append('image', formFile.files[0]);

		if (error === undefined) {
			form.classList.add('_sending')
			let responce = await fetch('sendmail.php', {
				method: 'POST',
				body: formData
			});
			if (responce.ok) {
				let result = await responce.json();
				alert(result.message);
				formPreview.innerHTML = '';
				form.reset();
				form.classList.remove('_sending')
			} else {
				alert('Ошибка');
				form.classList.remove('_sending')
			}
		} else {
			alert ('заполните форму')
		}
	}

	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for(let i = 0; i < formReq.length; i++) {
			const input = formReq[i];
			formRemoveError(input);

			if (input.classList.contains('._email')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
				formAddError(input);
				error++;
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
	}
	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	};
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	};
	function emailTest(input) {
		return /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(input.value);
	};

	const formFile = document.getElementById('formFile');
	const formPreview = document.getElementById('formPreview');

	formFile.addEventListener('change', () => {
		uploadFile(formFile.files[0]);
	});

	function uploadFile(file) {
		if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
			alert('Не тот формат');
			formFile.value = '';
			return;
		}
		if (file.size > 2 * 1024 * 1024) {
			alert('файл меньше 2мб надо');
			return;
		}
		let reader = new FileReader();
		reader.onload = function (e) {
			formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
		};
		reader.onerror = function (e) {
			alert('Ошибка');
		};
		reader.readAsDataURL(file);
	};
});

/*
<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', '../PHPMailer/language/');
$mail->IsHTML(true);

$mail->setFrom('caca.com', 'Заказчик');
$mail->addAddress('isaevegor.work@gmail.com');
$mail->Subject = 'Письмо из портфолио';

$body = '<h1>Новое письмо</h1>';

if(trim(!empty($_POST['name']))){
	$body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
}
if(trim(!empty($_POST['email']))){
	$body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
}
if(trim(!empty($_POST['message']))){
	$body.='<p><strong>Сообщение:</strong> '.$_POST['message'].'</p>';
}

if(!empty($_FILES['image']['tmp_name'])) {
	$filePath = __DIR__ . '/files/' . $_FILES['image']['name'];

	if(copy($_FILES['images']['tmp_name'], $filePath)){
		$fileAttach = $filePath;
		$body.='<p><strong>Файлы:</strong>.</p>';
		$mail->addAttachment($fileAttach);
	}
}

$mail->Body = $body;

if (!$mail->send()) {
	$message = 'Ошибка';
} else {
	$message = 'Данные отправлены';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>
*/