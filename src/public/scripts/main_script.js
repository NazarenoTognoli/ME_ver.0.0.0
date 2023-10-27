
//Manipulción del DOM

function createDOM(objeto, all, ...elementos) {
  for (let i = 0; i < elementos.length; i++) {
  	if (all) {
  		let elementosEncontrados = document.querySelectorAll(elementos[i]);
      	objeto[elementos[i]] = elementosEncontrados;
  	}
  	else {
		objeto[elementos[i]] = document.querySelector(elementos[i]);
  	}	
  }
}

let mainDOM = {};

//Elemento específico
createDOM(
	mainDOM,
	false,
  	".l-aside__button",
  	".r-aside__button",
  	".l-aside",
  	".r-aside",
  	".main",
  	".l-aside__button img",
	".r-aside__button img",
  
);
//Todos los elementos
createDOM(
	mainDOM,
	true,
	".r-aside__section",
	".r-aside__section span"
);

//Lógica de los botones laterales para abrir los Asides
function lButtonFunc() {
	let lAsideFlexVal = window.getComputedStyle(mainDOM[".l-aside"]).getPropertyValue('flex');
	if (lAsideFlexVal === "0 1 0%") {
		mainDOM[".main"].style.flex = "4";	
		mainDOM[".l-aside"].style.flex = "1";
		mainDOM[".r-aside"].style.flex = "0";
		mainDOM[".l-aside__button img"].style.transform = "scaleX(-1)";
		mainDOM[".r-aside__button img"].style.transform = "scaleX(1)";
		for (let i = 0; i < mainDOM[".r-aside__section span"].length; i++) {
			mainDOM[".r-aside__section"][i].style.opacity = "0";
		}
	}
	else {
		mainDOM[".l-aside"].style.flex = "0";
		mainDOM[".r-aside"].style.flex = "0";
		mainDOM[".main"].style.flex = "1";
		mainDOM[".l-aside__button img"].style.transform = "scaleX(1)";
		for (let i = 0; i < mainDOM[".r-aside__section span"].length; i++) {
			mainDOM[".r-aside__section"][i].style.opacity = "0";
		}
	}
}
function rButtonFunc() {
	let rAsideFlexVal = window.getComputedStyle(mainDOM[".r-aside"]).getPropertyValue('flex');
	if (rAsideFlexVal === "0 1 0%") {
		mainDOM[".main"].style.flex = "8";	
		mainDOM[".r-aside"].style.flex = "1";
		mainDOM[".l-aside"].style.flex = "0";
		mainDOM[".r-aside__button img"].style.transform = "scaleX(-1)";
		mainDOM[".l-aside__button img"].style.transform = "scaleX(1)";
		for (let i = 0; i < mainDOM[".r-aside__section span"].length; i++) {
			mainDOM[".r-aside__section"][i].style.opacity = "1";
		}
	}
	else {
		mainDOM[".r-aside"].style.flex = "0";
		mainDOM[".l-aside"].style.flex = "0";
		mainDOM[".main"].style.flex = "1";
		mainDOM[".r-aside__button img"].style.transform = "scaleX(1)";
		for (let i = 0; i < mainDOM[".r-aside__section span"].length; i++) {
			mainDOM[".r-aside__section"][i].style.opacity = "0";
		}
	}
}
//Clicks para laterales
mainDOM[".l-aside__button"].addEventListener('click', lButtonFunc);
mainDOM[".r-aside__button"].addEventListener('click', rButtonFunc);
//Teclas para leterales
document.addEventListener('keydown', (event) => {
	if (event.key === 'Q' || event.key === 'q') {
		lButtonFunc();
	}
	if (event.key === 'E' || event.key === 'e') {
		rButtonFunc();
	}
});

//Lógica de los botones de r-aside

function rAsideBTN () {
  for (let i = 0; i < mainDOM[".r-aside__section"].length; i++) {
  	mainDOM[".r-aside__section"][i].classList.remove("r-aside__section--active");
  }
  this.classList.add("r-aside__section--active");
}
for (let i = 0; i < mainDOM[".r-aside__section"].length; i++) {
	mainDOM[".r-aside__section"][i].addEventListener('click', rAsideBTN);
}