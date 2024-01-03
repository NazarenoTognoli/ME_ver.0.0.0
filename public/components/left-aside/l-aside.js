//Left Aside Logic
function toggleLeftAsideState() {

	minWidthAside(false, "r");
	let flexSize = window.getComputedStyle(mainDOM[".l-aside"]).getPropertyValue('flex');
	let active = "0 1 0%";

	if (flexSize === active) {
		adjustFlexSizes(mainFlexLeft, lAsideFlexLeft, rAsideFlexLeft);
		adjustImgInversion("-1", "1");
		minWidthAside(true, "l");
	}
	else {
		adjustFlexSizes("9", "0", "0");
		adjustImgInversion("1", "1");
		minWidthAside(false, "l");
	}
	rAsideButtonDisappear(true);
}
asideButtonFunctionsLoaded.onChange(true);

//Resize Event for Left Aside
applyResizeEvent("x", "ahead", ".l-aside__resize-bar", ".l-aside",
	(e)=>{
		mainDOM[".l-aside"].style.transition = "none";
    	mainDOM[".main"].style.transition = "none";
	},
	(e)=>{
		const lAsideWidth = e.originalSizeWidth + (event.clientX - e.startPositionX);
    	const mainWidth = window.innerWidth - mainDOM[".l-aside"].offsetWidth;

    	lAsideFlexLeft = (lAsideWidth / window.innerWidth) * 100 / 9;
    	mainFlexLeft = (mainWidth / window.innerWidth) * 100 / 9;

    	adjustFlexSizes(mainFlexLeft, lAsideFlexLeft, "0");
	},
	(e)=>{
		mainDOM[".l-aside"].style.transition = "flex .3s ease";
    	mainDOM[".main"].style.transition = "flex .3s ease";
	}
);

//Resize Event for left aside console
function lAsideRefreshHeight (value) {
	let contentStyle = window.getComputedStyle(mainDOM[".l-aside__body > .content"]);
	let consoleStyle = window.getComputedStyle(mainDOM[".l-aside__body > .developer-console"]);
		return value ? contentStyle.getPropertyValue("height") : consoleStyle.getPropertyValue("height");
}
