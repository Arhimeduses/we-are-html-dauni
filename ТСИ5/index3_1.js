function Read_More1(){

	var dots = document.getElementById("dots1");
	var more = document.getElementById("more1");
	var btn = document.getElementById("btn1");

	if(dots1.style.display==="none"){
		dots.style.display="inline";
		btn1.innerHTML="Подробнее";
		more.style.display="none";
	}

	else{
		dots1.style.display="none";
		btn1.innerHTML="Скрыть";
		more1.style.display="inline";
	}


}
