export function adjustFlexSizes(mainParam, lAsideParam, rAsideParam) {
	document.querySelector(".main").style.flex = mainParam;	
	document.querySelector(".l-aside").style.flex = lAsideParam;
	document.querySelector(".r-aside").style.flex = rAsideParam;
}
export function adjustImgInversion(left, right) {
	document.querySelector(".l-aside__button img").style.transform = `scaleX(${left})`;
	document.querySelector(".r-aside__button img").style.transform = `scaleX(${right})`;
}
export function minWidthAside(value, side) {
	if (side === "right") {	
		document.querySelector(".r-aside").style.minWidth = value ? "6.94px" : "0";
	} else {
		document.querySelector(".l-aside").style.minWidth = value ? "6.94px" : "0";
	}
}
export function adjustSizes(left, right) {
	document.querySelector(".l-aside").style.width = left
	document.querySelector(".r-aside").style.width = right
}
export function Aside(element) {
	this.size = "33vw"
	this.element = element
	this.update = function(value) {
		this.size = value;
	}
}
export function removeTransition(remove, side) {
	side.style.transition = remove ? "none" : "width .3s ease"
}

//The rAsideButtonDisappear function is to fix problems with the right side styles when it contracts
let activeClassSection, activeClassSubsection;
export function rAsideHiddenStylesFix(hide) {
	const getActiveClass = (section) => ({class: `r-aside__${section === "section" ? "section" : "subsection"}-button--active`})
	if (!activeClassSection || !activeClassSubsection) {
		activeClassSection = getActiveClass("section")
		activeClassSubsection = getActiveClass("subsection")
	}
	let activeClass;
	const removeBodyMargin = (section) => {
		document.querySelector(`.r-aside__${section === "section" ? "section" : "subsection-body"}`).
		style.marginRight = hide ? "0" : "5px"}
	
	const removeActiveClass = (button) => {
			activeClass.exist = button;
			button.classList.remove(activeClass.class)}
	
	const addActiveClass = () => activeClass.exist.classList.add(activeClass.class)
	
	const activeClassConditions = (button) => {
		if (button.classList.contains(activeClass.class) && hide) {//Check if the button has the class and if hide then remove active
			removeActiveClass(button)}
		if (activeClass.exist && !hide) {//Check if there is something active and if is not hide then will add active
			addActiveClass()}}
	
	const handleActiveClass = (buttons) => {
		activeClass = buttons.includes("subsection") ? activeClassSubsection : activeClassSection;
		document.querySelectorAll(buttons).forEach(button => {
			button.style.cursor = hide ? "default" : "pointer"
			activeClassConditions(button)
		})}

	handleActiveClass(".r-aside__section-button")
	handleActiveClass(".r-aside__subsection-button")

	removeBodyMargin("section")
	removeBodyMargin("subsection")
}