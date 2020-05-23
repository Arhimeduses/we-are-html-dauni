function Read_More(){
	var dots = document.getElementById("dots1");
	var more = document.getElementById("more1");
	var btn = document.getElementById("btn1");

	var dots = document.getElementById("dots2");
	var more = document.getElementById("more2");
	var btn = document.getElementById("btn2");

	if(dots1.style.display="none"){
		dots.style.display="inline";
		btn1.innerHTML="Подробнее";
		more.style.display="none";
	}

	else{
		dots1.style.display="none";
		btn1.innerHTML="Скрыть";
		more1.style.display="inline";
	}

	if(dots2.style.display="none"){
		dots2.style.display="inline";
		btn2.innerHTML="Подробнее";
		more2.style.display="none";
	}

	else{
		dots2.style.display="none";
		btn2.innerHTML="Скрыть";
		more2.style.display="inline";
	}


}
