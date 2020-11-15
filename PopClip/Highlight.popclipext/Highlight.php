<?php 

$str = getenv('POPCLIP_TEXT');
$str = str_replace('**', '::', $str);
$str = str_replace('“', '「', $str);
echo str_replace('”', '」', $str);
