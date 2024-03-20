//Components Sizes
const componentsDOM = (selector, all) => all ? document.querySelectorAll(selector) : document.querySelector(selector);

export function adjustFlexSizes(mainParam, lAsideParam, rAsideParam) {
	componentsDOM(".main").style.flex = mainParam;	
	componentsDOM(".l-aside").style.flex = lAsideParam;
	componentsDOM(".r-aside").style.flex = rAsideParam;
}
export function adjustImgInversion(left, right) {
	componentsDOM(".l-aside__button img").style.transform = `scaleX(${left})`;
	componentsDOM(".r-aside__button img").style.transform = `scaleX(${right})`;
}
export function minWidthAside(value, side) {
	if (side === "right") {	
		componentsDOM(".r-aside").style.minWidth = value ? "6.94px" : "0";
	} else {
		componentsDOM(".l-aside").style.minWidth = value ? "6.94px" : "0";
	}
}
export function Flex(lAside, rAside, main) {
	this.lAside = lAside;
	this.rAside = rAside;
	this.main = main;
	this.update = function(method, value) {
		this[method] = value;
	}
}
export function removeTransition(remove, side, main) {
	side.style.transition = remove ? "none" : "flex .3s ease"
   	main.style.transition = remove ? "none" : "flex .3s ease"
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
		componentsDOM(`.r-aside__${section === "section" ? "section" : "subsection-body"}`).
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
	
	const manageButtonsActiveClass = (buttons) => {
		activeClass = buttons.includes("subsection") ? activeClassSubsection : activeClassSection;
		componentsDOM(buttons, true).forEach(button => {
			button.style.cursor = hide ? "default" : "pointer"
			activeClassConditions(button)
		})}

	manageButtonsActiveClass(".r-aside__section-button")
	manageButtonsActiveClass(".r-aside__subsection-button")

	removeBodyMargin("section")
	removeBodyMargin("subsection")
}