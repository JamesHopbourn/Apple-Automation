<?php
$str = getenv('POPCLIP_TEXT');
echo preg_replace("/(\R){2,}/", "$1", $str);
php?>

