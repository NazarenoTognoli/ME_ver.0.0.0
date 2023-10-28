//Left Aside Logic
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

//Clicks for Asides
mainDOM[".l-aside__button"].addEventListener('click', lButtonFunc);
mainDOM[".r-aside__button"].addEventListener('click', rButtonFunc);
//Q and E Keys for Asides
document.addEventListener('keydown', (event) => {
	if (event.key === 'Q' || event.key === 'q') {
		lButtonFunc();
	}
	if (event.key === 'E' || event.key === 'e') {
		rButtonFunc();
	}
});
