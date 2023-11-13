//Right Aside Logic
function toggleRightAsideState() {
	let rAsideFlexVal = window.getComputedStyle(mainDOM[".r-aside"]).getPropertyValue('flex');
	
	if (rAsideFlexVal === "0 1 0%") {
		adjustFlexSizes("8", "0", "1");
		adjustImgInversion("1", "-1");
		rAsideButtonDisappear(false);
	}
	else {
		adjustFlexSizes("1", "0", "0");
		adjustImgInversion("1", "1");
		rAsideButtonDisappear(true);
	}
}

//Right Aside Buttons Logic
function rAsideButton() {
	//Active Style
  document.querySelectorAll(".r-aside__section--active").forEach(elemento => elemento.classList.remove("r-aside__section--active"));
  this.classList.add("r-aside__section--active");
}
//Activate each right aside button
mainDOM[".r-aside__section"].forEach(elemento => elemento.addEventListener('click', rAsideButton))