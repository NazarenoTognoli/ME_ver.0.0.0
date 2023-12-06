
//Right Aside Logic
function toggleRightAsideState() {
	let rAsideFlexVal = window.getComputedStyle(mainDOM[".r-aside"]).getPropertyValue('flex');
	if (rAsideFlexVal === "0 1 0%") {
    minWidthRightAside(true);
		adjustFlexSizes(mainFlexRight, "0", rAsideFlexRight);
		adjustImgInversion("1", "-1");
		rAsideButtonDisappear(false);
	}
	else {
    minWidthRightAside(false);
		adjustFlexSizes("9", "0", "0");
		adjustImgInversion("1", "1");
		rAsideButtonDisappear(true);
	}
}

//Right Aside Section Buttons Active Styles
function rAsideSectionButton() {
  //Change styles classes
  document.querySelectorAll(".r-aside__section--active").forEach(elemento => elemento.classList.remove("r-aside__section--active"));
  this.classList.add("r-aside__section--active");
}
//Activate each right aside button styles
mainDOM[".r-aside__section"].forEach(elemento => elemento.addEventListener('click', rAsideSectionButton))


//Right Aside Subsection Buttons Active Styles
function rAsideSubsectionButton() {
  //Change styles classes
  document.querySelectorAll(".r-aside__subsection--active").forEach(elemento => elemento.classList.remove("r-aside__subsection--active"));
  this.classList.add("r-aside__subsection--active");
}
//Activate each right aside button styles
mainDOM[".r-aside__subsection"].forEach(elemento => elemento.addEventListener('click', rAsideSubsectionButton));


//Resize Event for Right Aside
applyResizeEvent("x", "oposite", ".r-aside__resize-bar", ".r-aside",
  (e)=>{
    document.body.style.userSelect = 'none';
    mainDOM[".r-aside"].style.transition = "none";
    mainDOM[".main"].style.transition = "none";
  },
  (e)=>{

    const rAsideWidth = e.originalSizeWidth - (event.clientX - e.startPositionX);
    const mainWidth = window.innerWidth - mainDOM[".r-aside"].offsetWidth;

    rAsideFlexRight = (rAsideWidth / window.innerWidth) * 100 / 9;
    mainFlexRight = (mainWidth / window.innerWidth) * 100 / 9;

    adjustFlexSizes(mainFlexRight, "0", rAsideFlexRight);
  },
  (e)=>{
    document.body.style.userSelect = '';
    mainDOM[".r-aside"].style.transition = "flex .3s ease";
    mainDOM[".main"].style.transition = "flex .3s ease";
  }
);
//Section Flags
// let sections = {
//     default: false,
//     ish: false
// }
// mainDOM[".insoha-btn"].addEventListener('click', function() {
//   sections.ish = true;
//   console.log(sections);
// });