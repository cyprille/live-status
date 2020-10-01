<?php

$lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);

switch ($lang){
    case "fr":
    	header('Location: ' . substr($lang, 0, 2) . '/index.html');
        break;
    
    default:
    	header('Location: en/index.html');
        break;
}
