let mainDOM = {};
function createMainDOM() {
  for (let i = 0; i < arguments.length; i++) {	
    mainDOM[arguments[i]] = document.querySelector(arguments[i]);
  }
}
const lAside = document.querySelector(".l-aside");
const rAside = document.querySelector(".r-aside");
const main = document.querySelector(".main");
createMainDOM(
	".aside__button",
	".l-aside__button",
	".r-aside__button",
	".l-aside",
	".r-aside",
	".main"
);
var rButtonFlag = true;
var lButtonFlag = true;
function lButtonFunc() {
	rButtonFlag = false;
	let lAsideFlexVal = window.getComputedStyle(mainDOM[".l-aside"]).getPropertyValue('flex');
	if (lAsideFlexVal === "0 1 0%") {
		mainDOM[".main"].style.flex = "4";	
		mainDOM[".l-aside"].style.flex = "1";
		mainDOM[".r-aside"].style.flex = "0";
		document.querySelector(".l-aside__button img").style.transform = "scaleX(-1)";
		document.querySelector(".r-aside__button img").style.transform = "scaleX(1)";
	}
	else {
		mainDOM[".l-aside"].style.flex = "0";
		mainDOM[".r-aside"].style.flex = "0";
		mainDOM[".main"].style.flex = "1";
		document.querySelector(".l-aside__button img").style.transform = "scaleX(1)";
	}
	setTimeout(() => {
		rButtonFlag = true;
	}, 100);
}
function rButtonFunc() {
	lButtonFlag = false;
	let rAsideFlexVal = window.getComputedStyle(rAside).getPropertyValue('flex');
	if (rAsideFlexVal === "0 1 0%") {
		mainDOM[".main"].style.flex = "8";	
		mainDOM[".r-aside"].style.flex = "1";
		mainDOM[".l-aside"].style.flex = "0";
		document.querySelector(".r-aside__button img").style.transform = "scaleX(-1)";
		document.querySelector(".l-aside__button img").style.transform = "scaleX(1)";
	}
	else {
		mainDOM[".r-aside"].style.flex = "0";
		mainDOM[".l-aside"].style.flex = "0";
		mainDOM[".main"].style.flex = "1";
		document.querySelector(".r-aside__button img").style.transform = "scaleX(1)";
	}
	setTimeout(() => {
		lButtonFlag = true;
	}, 100);
}
mainDOM[".l-aside__button"].addEventListener('click', lButtonFunc);
mainDOM[".r-aside__button"].addEventListener('click', rButtonFunc);
document.addEventListener('keydown', (event) => {
	if ((event.key === 'Q' || event.key === 'q') && lButtonFlag) {
		lButtonFunc();
	}
	if ((event.key === 'E' || event.key === 'e') && rButtonFlag) {
		rButtonFunc();
	}
});

