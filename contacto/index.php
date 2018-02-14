<?php
header( "content-type: text/plain" );

setlocale(LC_TIME, " es_PE.UTF-8"); 
date_default_timezone_set("america/lima");

require_once __DIR__."/vendor/autoload.php";

$f3 = F3::instance();
$f3->config( __DIR__."/valores.cfg" );

$post = $f3->get( "POST" );

//print_r($post);
$apiGoogle = "https://www.google.com/recaptcha/api/siteverify";
$valores = array(
	"secret" => "6Lf1eBsUAAAAAKw3e7r5wVuNnWffn_aDZxjTr47_",
	"response" => $post["g-recaptcha-response"],
	"remoteip" => $f3->get("SERVER.REMOTE_ADDR")
);

$r = file_get_contents($apiGoogle."?".http_build_query($valores));
$resultado = json_decode($r);

if ($resultado->success) {
	unset( $post["g-recaptcha-response"] );
	$v = $f3->get( "correo" );
	$correo = new SMTP( $v["host"], $v["puerto"], $v["esquema"], $v["usuario"], $v["clave"] );

	$correo->set("FROM", "contacto@atomikal.com<contacto@atomikal.com>" );
	$correo->set("TO", "contacto@atomikal.com" );
	$correo->set("Subject", "Contacto" );
	$m = "Datos Registrados" . PHP_EOL;
	foreach ($post as $clave => $valor) {
		$m .= "\t$clave: $valor" . PHP_EOL;
	}

	$correo->send($m);
	header( "location:" . $f3->get( "SERVER.HTTP_REFERER" ) . "#ok" );
} else {

	header( "location:" . $f3->get( "SERVER.HTTP_REFERER" ) . "?m=error en la prueba CAPTCHA#error" );
}
exit();

