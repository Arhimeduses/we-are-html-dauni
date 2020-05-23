function Read_More2(){

	var dots = document.getElementById("dots2");
	var more = document.getElementById("more2");
	var btn = document.getElementById("btn2");

	if(dots2.style.display==="none"){
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
