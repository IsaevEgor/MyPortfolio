<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../PHPMailer/src/Exception.php';
require '../PHPMailer/src/PHPMailer.php';

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