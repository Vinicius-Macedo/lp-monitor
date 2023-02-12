<?php

include_once 'enviar.php';


if ($_SERVER['REQUEST_METHOD'] != 'POST') {
  response(200, "Método inválido");
}

$body = file_get_contents('php://input');

if (!$body) {
  response(400, "Formulário vazio");
}

$body = json_decode($body);

try {
  enviarEmail($body);
  response(200, "sucess");
} catch (PDOException $e) {
  response(400, false);
}


function response($code, $data)
{
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: *");
  header("Content-Type:application/json");

  http_response_code($code);
  echo json_encode($data);
  die();
}
