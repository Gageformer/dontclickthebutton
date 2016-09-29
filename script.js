var clicks = 0;
function gotogoogle() {
	window.location.href="https://www.google.com/";
}
function whydidyouclickme() {
	clicks = clicks + 1;
	if (clicks == 1) {
		document.getElementById("dontpress").innerHTML = "Why did you click me? Well just dont do it again.";
	}
	else if (clicks == 2) {
		document.getElementById("dontpress").innerHTML = "I said dont click me again do you not get it? DO NOT CLICK ME AGAIN!";
	}
	else if (clicks == 3) {
		document.getElementById("dontpress").innerHTML = "You dont learn do you? DO IT AGAIN I DARE YOU!";
	}
	else if (clicks == 4) {
		document.getElementById("dontpress").innerHTML = "STOP NOW OR ELSE.........";
	}
	else if (clicks == 5) {
		document.getElementById("dontpress").innerHTML = "THATS IT I CANT TAKE YOU ANYMORE! I WILL LET GOOGLE HANDLE YOU NOW! CLICK ME PLEASE!!!!!";
	}
	else if (clicks == 6) {
		gotogoogle();
	}
}