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
	"head",
	".r-aside__resize-bar"
);

//Todos los elementos
createDOM(
	mainDOM,
	true,
	".r-aside__section",
	".r-aside__section span",
	".r-aside__section--active"
);