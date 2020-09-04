<?php 

$str = getenv('POPCLIP_TEXT');
echo str_replace('**', '::', $str);
