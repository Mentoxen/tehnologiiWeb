<?php

$url="";
$name="";
$mail="";
if(isset($_POST['url']))
{$url=$_POST['url'];}
if(isset($_POST['name']))
{$name=$_POST['name'];}
if(isset($_POST['mail']))
{$mail=$_POST['mail'];}

// Message
$message = "URL: $url\n NAME: $name \n MAIL: $mail ";

// In case some string is longer than 70 symbols we use wordwrap()
$message = wordwrap($message, 70);

// And send it
mail('iuliu.dascalu@gmail.com', 'My website', $message, "Content-type: text/plain; charset=utf-8");
?>