//for login popup

function login(showhide){
if(showhide == "show"){
    document.getElementById('popupbox').style.visibility="visible";
	document.getElementById('sign').style.visibility="hidden";
}else if(showhide == "hide"){
    document.getElementById('popupbox').style.visibility="hidden";
    document.getElementById('sign').style.visibility="hidden";
    document.getElementById('overlay').style.display="none";	
}
}

function signup(showhide){
if(showhide == "show"){
    document.getElementById('sign').style.visibility="visible";
	document.getElementById('popupbox').style.visibility="hidden";
}else if(showhide == "hide"){
    document.getElementById('popupbox').style.visibility="visible";
    document.getElementById('sign').style.visibility="visible";	
}
}

//for overlay1

function overlay_on()
{
document.getElementById("overlay").style.display="block";
}

function overlay_off()
{
document.getElementById("overlay").style.display="none";
}

//for overlay2 and overlay 3


function overlay2_on()
{
	document.getElementById("overlay2").style.display="block";
	document.getElementById("div1").style.display="block";
	document.getElementById("div5").style.display="none";
}


function overlay3_on()
{
	document.getElementById("overlay2").style.display="block";
	document.getElementById("div1").style.display="none";
	document.getElementById("div5").style.display="block";
}

function overlay2_off()
{
	document.getElementById("overlay2").style.display="none";
}

function change_overlay_to_login()
{
	document.getElementById("overlay2").style.display="none";
	document.getElementById("overlay").style.display="block";
	document.getElementById('popupbox').style.visibility="visible";
	document.getElementById('sign').style.visibility="hidden";
}

function change_overlay_to_signup()
{
	document.getElementById("overlay2").style.display="none";
	document.getElementById("overlay").style.display="block";
	document.getElementById('popupbox').style.visibility="hidden";
	document.getElementById('sign').style.visibility="visible";
}

function pickup()
{
document.getElementById("div2").style.display="none";

var a=document.getElementById("d1_1");
a.style.backgroundColor="white";
a.style.color="black";

var b=document.getElementById("d1_2");
b.style.backgroundColor="red";
b.style.color="white";

var c=document.getElementById("div1");
c.style.height="300px";


}

function delivery()
{
document.getElementById("div2").style.display="block";

var a=document.getElementById("d1_1");
a.style.backgroundColor="red";
a.style.color="white";

var b=document.getElementById("d1_2");
b.style.backgroundColor="white";
b.style.color="black";

var c=document.getElementById("div1");
c.style.height="400px";

}


function show_time()
{
document.getElementById("div6").style.display="block";
document.getElementById("p1").style.display="none";
}

function not_show()
{
document.getElementById("p1").style.display="block";
document.getElementById("div6").style.display="none";
}

