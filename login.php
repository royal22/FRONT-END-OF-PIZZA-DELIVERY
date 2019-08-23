<?php
/*if(isset($_COOKIE['name']))
{
	echo"Welcome".$_COOKIE['name']."!!!";
}
else{
echo"welcome for the first time";
}*/

//echo($_POST['unametxt']);
//echo($_POST['pwdtxt']);
$un=$_POST['unametxt'];
$pwd=$_POST['pwdtxt'];
$file=fopen("user.txt","r");
$userData=fgets($file);
$arr=explode("*",$userData);

$cnt=count($arr);
$c=0;
for($x=0;$x<$cnt;$x=$x+2)
{
if($arr[$x]==$un && $arr[$x+1]==$pwd)
{
echo"<script type='text/javascript'>alert('welcome');</script>";

echo file_get_contents("e.html");
$c=1;
}	

}
if($c==0)
{
echo"<script type='text/javascript'>alert('invalid');</script>";
}


?>