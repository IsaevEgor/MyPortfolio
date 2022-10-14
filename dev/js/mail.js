/*document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("form");

	form.addEventListener("submit", formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);
// РАБОТАЕТ
		let formData = new FormData(form);

		if (error === 0) {
			form.classList.add("_sending");
			let response = await fetch("../sendmail.php", {
				method: "POST",
				body: formData
			});
			if(response.ok) {
				let result = await response.json();
				alert(result.messege);
				form.reset();
				form.classList.remove("_sending");
			} else {
				alert("ошибка");
			}
		} else {
			alert("Запоните поля");
		}
	};

	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll("._req");

		for(let i = 0; i < formReq.length; i++) {
			const input = formReq[i];
			formRemoveError(input);

			if(input.classList.contains("_email")) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
				formAddError(input);
				error++;
			} else {
				if (input.value === "") {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}
	function formAddError(input) {
		input.classList.add("_error");
	};
	function formRemoveError(input) {
		input.classList.remove("_error");
	};
	function emailTest(input) {
		return !/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(input.value);
	};

})
*/