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
  let active = document.querySelector(".r-aside__section--active");
  if (active !== null) {
    active.style.borderLeft = "none";
  }
  document.querySelectorAll(".r-aside__section--active").forEach(elemento => elemento.classList.remove("r-aside__section--active"));
  this.classList.add("r-aside__section--active");
  document.querySelector(".r-aside__section--active").style.borderLeft = "2px solid var(--aqua4)";
}
//Activate each right aside button
mainDOM[".r-aside__section"].forEach(elemento => elemento.addEventListener('click', rAsideButton))






//RESIZING RIGHT ASIDE

let rAsideIsResizing = false;
let rAsideStartPositionClientX = 0;
let rAsideOriginalWidth = 0;
let mainOriginalWidth = 0;

mainDOM[".r-aside__resize-bar"].addEventListener('mousedown', rAsideStartResize);

function rAsideStartResize(event) {
  document.addEventListener('mousemove', rAsideResize);
  document.addEventListener('mouseup', rAsideStopResize);

  rAsideIsResizing = true;
  rAsideStartPositionClientX = event.clientX;

  document.body.style.userSelect = 'none';

  rAsideOriginalWidth = mainDOM[".r-aside"].offsetWidth;
  mainOriginalWidth = mainDOM[".main"].offsetWidth;

  mainDOM[".r-aside"].style.transition = "none";
  mainDOM[".main"].style.transition = "none";
}


function rAsideResize(event) {
  if (rAsideIsResizing) {

    const rAsideWidth = rAsideOriginalWidth - (event.clientX - rAsideStartPositionClientX);
    const mainWidth = window.innerWidth - mainDOM[".r-aside"].offsetWidth;

    const rAsideFlex = (rAsideWidth / window.innerWidth) * 100 / 9;
    const mainFlex = (mainWidth / window.innerWidth) * 100 / 9;

    adjustFlexSizes(mainFlex, "0", rAsideFlex);

  }
}
function rAsideStopResize() {
  document.removeEventListener('mousemove', rAsideResize);
  document.removeEventListener('mouseup', rAsideStopResize);

  rAsideIsResizing = false;

  rAsideOriginalWidth = mainDOM[".r-aside"].offsetWidth;
  mainOriginalWidth = mainDOM[".main"].offsetWidth;
  
  document.body.style.userSelect = '';

  mainDOM[".r-aside"].style.transition = "flex .3s ease";
  mainDOM[".main"].style.transition = "flex .3s ease";
}