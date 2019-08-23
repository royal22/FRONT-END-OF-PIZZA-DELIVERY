<?php

extract($_POST);
$file=fopen("user.txt","a");

$userData=$unametxt."*".$pwdtxt."*";
fwrite($file,$userData);
fclose($file);

echo"user created successfully";
setcookie("name",$unametxt,3600 + time());
?>