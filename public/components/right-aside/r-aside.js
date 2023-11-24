//Right Aside Logic
function toggleRightAsideState() {
	let rAsideFlexVal = window.getComputedStyle(mainDOM[".r-aside"]).getPropertyValue('flex');
	
	if (rAsideFlexVal === "0 1 0%") {
		adjustFlexSizes("8", "0", "1");
		adjustImgInversion("1", "-1");
		rAsideButtonDisappear(false);
		// let width = mainDOM[".r-aside"].offsetWidth;
		// // mainDOM[".r-aside"].style.flex = 'none';
		// mainDOM[".r-aside"].style.width = width + "px";
		// mainDOM[".r-aside"].style.width = "605px"
		// mainDOM[".r-aside"].style.minWidth = "10px";
		//probamos que es una distribución de espacios.
		//151.78
		//1366
		// setTimeout(()=>{
		// 	mainDOM[".main"].style.transition = "none";
		// 	mainDOM[".r-aside"].style.transition = "none";	
		// }, 300);
	}
	else {
		adjustFlexSizes("1", "0", "0");
		adjustImgInversion("1", "1");
		rAsideButtonDisappear(true);
		// mainDOM[".r-aside"].style.minWidth = "0";
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






//RESIZING 

const resizableElement = document.querySelector('.r-aside__resize-bar');
const resizableElementChange = mainDOM[".r-aside"];
let isResizing = false;
let startPosition = 0;
resizableElement.addEventListener('mousedown', startResize);
document.addEventListener('mousemove', resize);
document.addEventListener('mouseup', stopResize);
function startResize(event) {
  isResizing = true;
  startPosition = event.clientX;
  document.body.style.userSelect = 'none';
  originalWidth = resizableElementChange.offsetWidth;
  originalWidthMain = originalWidthMain = mainDOM[".main"].offsetWidth;
}
let originalWidth = resizableElementChange.offsetWidth;
let originalWidthMain = mainDOM[".main"].offsetWidth;
function resize(event) {
  if (isResizing) {
    const newWidthPx = originalWidth - (event.clientX - startPosition);
    const newWidthPxMain = window.innerWidth - mainDOM[".r-aside"].offsetWidth;
    //console.log("Main Width: " + newWidthPxMain);
    const newWidthPercentage = (newWidthPx / window.innerWidth) * 100;
    const newWidthMainPercentage = (newWidthPxMain / window.innerWidth) * 100;

    const newWidthFlex = newWidthPercentage / 9;
    const newWidthMainFlex = newWidthMainPercentage / 9;
    //console.log("newWidthFlex: " + newWidthFlex + " newWidthMainFlex: " + newWidthMainFlex);
    //console.log("newWidthPercentage " + newWidthPercentage + " newWidthMainPercentage " + newWidthMainPercentage)

    adjustFlexSizes(newWidthMainFlex, "0", newWidthFlex);
    //resizableElementChange.style.width = newWidthPercentage + "%";

  }
}
function stopResize() {
  isResizing = false;
  originalWidth = resizableElementChange.offsetWidth;
  originalWidthMain = mainDOM[".main"].offsetWidth;
  document.body.style.userSelect = '';
}