<?php

	$to = 'egorisaev.work@mail.ru';
	$from = trim($_POST['email']);
	
	$name = trim($_POST['name']);
	
	$message = htmlspecialchars(($_POST['message']));
	$message = urldecode(($message));
	$message = trim($message);
	
	$headers = "From $from" . "\r\n" .
	"Reply-To: $from" . "\r\n" .
	"X-Mailer: PHP/" . phpversion();
	
	if(mail($to, $name, $message, $headers)) {
		echo 'Письмо отправлено';
	} else {
		echo 'письмо не отправлено';
	}
?>