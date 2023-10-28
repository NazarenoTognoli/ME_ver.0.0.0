//Right Aside Logic
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

//Right Aside Buttons Logic
function rAsideBTN () {
  for (let i = 0; i < mainDOM[".r-aside__section"].length; i++) {
  	mainDOM[".r-aside__section"][i].classList.remove("r-aside__section--active");
  }
  this.classList.add("r-aside__section--active");
}
for (let i = 0; i < mainDOM[".r-aside__section"].length; i++) {
	mainDOM[".r-aside__section"][i].addEventListener('click', rAsideBTN);
}