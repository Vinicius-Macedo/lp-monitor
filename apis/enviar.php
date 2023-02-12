<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require './vendor/autoload.php';

//Create an instance; passing `true` enables exceptions

function enviarEmail($bodyText)
{

    $mail = new PHPMailer(true);

    try {
        //Server settings
        // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
        $mail->SMTPDebug = false;                      //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = 'email-ssl.com.br';                     //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = 'webmaster@titancapital1.hospedagemdesites.ws';                     //SMTP username
        $mail->Password   = 'CEs%.+xV7i5pXi9';                               //SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
        $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        //Recipients
        $mail->setFrom('webmaster@titancapital1.hospedagemdesites.ws', 'Formulário de contato');
        $mail->addAddress('webmaster@titancapital1.hospedagemdesites.ws');               //Name is optional
        $mail->addReplyTo('webmaster@titancapital1.hospedagemdesites.ws', 'Formulário de contato');

        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = 'Formulário de contato';
        $mail->Body    = $bodyText;

        $mail->send();
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}


// enviarEmail("viniciuscontato234@gmail.com");
