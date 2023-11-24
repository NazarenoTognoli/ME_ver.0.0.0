
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

function rAsideButtonDisappear(hide) {
	mainDOM[".r-aside__section"].forEach(element => {
		element.style.opacity = hide ? "0" : "1";
		element.style.cursor = hide ? "default" : "pointer"});
	let active = document.querySelector(".r-aside__section--active");
	let activeSpan = document.querySelector(".r-aside__section--active > span");
	active !== null ? active.style.borderLeft = hide ? "none" : "2px solid var(--aqua4)" : console.log("");
	activeSpan !== null ? activeSpan.style.paddingLeft = hide ? "4px" : "2px" : console.log(""); 
}
