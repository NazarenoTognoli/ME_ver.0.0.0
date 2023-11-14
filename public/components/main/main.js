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
	"head"
);

//Todos los elementos
createDOM(
	mainDOM,
	true,
	".r-aside__section",
	".r-aside__section span",
);