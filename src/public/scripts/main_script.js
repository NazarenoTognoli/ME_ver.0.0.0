const lButton = document.querySelector(".l-aside__button");
const rButton = document.querySelector(".r-aside__button");
const lAside = document.querySelector(".l-aside");
const rAside = document.querySelector(".r-aside");
const main = document.querySelector(".main");
var rButtonFlag = true;
var lButtonFlag = true;
function lButtonFunc() {
	rButtonFlag = false;
	let lAsideFlexVal = window.getComputedStyle(lAside).getPropertyValue('flex');
	if (lAsideFlexVal === "0 1 0%") {
		main.style.flex = "4";	
		lAside.style.flex = "1";
		rAside.style.flex = "0";
		document.querySelector(".l-aside__button img").style.transform = "scaleX(-1)";
		document.querySelector(".r-aside__button img").style.transform = "scaleX(1)";
	}
	else {
		lAside.style.flex = "0";
		rAside.style.flex = "0";
		main.style.flex = "1";
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
		main.style.flex = "8";	
		rAside.style.flex = "1";
		lAside.style.flex = "0";
		document.querySelector(".r-aside__button img").style.transform = "scaleX(-1)";
		document.querySelector(".l-aside__button img").style.transform = "scaleX(1)";
	}
	else {
		rAside.style.flex = "0";
		lAside.style.flex = "0";
		main.style.flex = "1";
		document.querySelector(".r-aside__button img").style.transform = "scaleX(1)";
	}
	setTimeout(() => {
		lButtonFlag = true;
	}, 100);
}
lButton.addEventListener('click', lButtonFunc);
rButton.addEventListener('click', rButtonFunc);
document.addEventListener('keydown', (event) => {
	if ((event.key === 'Q' || event.key === 'q') && lButtonFlag) {
		lButtonFunc();
	}
	if ((event.key === 'E' || event.key === 'e') && rButtonFlag) {
		rButtonFunc();
	}
});

