<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nome = $_POST["nome"];
  $email = $_POST["email"];
  $mensagem = $_POST["mensagem"];
  
  $destinatario = "samuelfrancatto1@gmail.com"; // Substitua pelo seu endereço de e-mail
  $assunto = "Feedback de $nome";
  
  $headers = "From: $email" . "\r\n" .
             "Reply-To: $email" . "\r\n" .
             "X-Mailer: PHP/" . phpversion();
  
  mail($destinatario, $assunto, $mensagem, $headers);
  
  echo "Obrigado por seu feedback!";
}
?>
