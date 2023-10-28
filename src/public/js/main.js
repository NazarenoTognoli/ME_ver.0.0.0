
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
