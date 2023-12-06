let rAsideFlag;
//User Interaction

asideButtonFunctionsLoaded.addEventListenerT(function() {
	//Clicks for Asides
	mainDOM[".l-aside__button"].addEventListener('click', toggleLeftAsideState);
	mainDOM[".r-aside__button"].addEventListener('click', toggleRightAsideState);
	//Q and E Keys for Asides
	document.addEventListener('keydown', (event) => {
		if (event.altKey && (event.key === 'a' || event.key === "A")) {
			toggleLeftAsideState();
		}
		if (event.altKey && (event.key === 'l' || event.key === "L")) {
			toggleRightAsideState();
		}
	});
});

//Components Sizes

let rAsideFlexRight = "1";
let mainFlexRight = "8";
let lAsideFlexRight = "0";

let rAsideFlexLeft = "0";
let mainFlexLeft = "7.2";
let lAsideFlexLeft = "1.8";

//Adjust Sizes For Main, Right Aside and Left Aside when the User Interacts

function adjustFlexSizes(mainParam, lAsideParam, rAsideParam) {
	mainDOM[".main"].style.flex = mainParam;	
	mainDOM[".l-aside"].style.flex = lAsideParam;
	mainDOM[".r-aside"].style.flex = rAsideParam;
}

//Adjust Images Inversion

function adjustImgInversion(left, right) {
	mainDOM[".l-aside__button img"].style.transform = `scaleX(${left})`;
	mainDOM[".r-aside__button img"].style.transform = `scaleX(${right})`;
}

//Right Aside Button Styles Disappearing
let subsectionActiveStyle = {saved: undefined, element: 'r-aside__subsection--active'}
let sectionActiveStyle = {saved: undefined, element: 'r-aside__section--active'}
function rAsideButtonDissapearLogic(sections, active, hide) {
	mainDOM[sections].forEach(element => {
		//element.style.opacity = hide ? "0" : "1";
		element.style.cursor = hide ? "default" : "pointer";
		if (element.classList.contains(active.element) && hide) {
			active.saved = element;
			element.classList.remove(active.element);
		}
		if (active.saved !== undefined && !hide) {
			active.saved.classList.add(active.element);
		}
	});
}
function rAsideButtonDisappear(hide) {
	rAsideButtonDissapearLogic(".r-aside__section", sectionActiveStyle, hide);
	rAsideButtonDissapearLogic(".r-aside__subsection", subsectionActiveStyle, hide);
}
function minWidthRightAside(value) {
	mainDOM[".r-aside"].style.minWidth = value ? "6.94px" : "0";
}
