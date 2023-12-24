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
function lAsideRefreshHeight (value) {
	let contentStyle = window.getComputedStyle(mainDOM[".l-aside__body > .content"]);
	let consoleStyle = window.getComputedStyle(mainDOM[".l-aside__body > .developer-console"]);
		return value ? contentStyle.getPropertyValue("height") : consoleStyle.getPropertyValue("height");
}

let lAsideConsoleHeightPercentage = lAsideRefreshHeight(false);
let lAsideContentHeightPercentage = lAsideRefreshHeight(true);

applyResizeEvent("y", "oposite", ".l-aside__body > .content > .resize-bar", ".l-aside__body > .content", 
	(e)=>{},
	(e)=>{
		let wholeHeight = mainDOM[".l-aside__body"].offsetHeight;
    	let consoleHeight = mainDOM[".l-aside__body > .developer-console"].offsetHeight;
    	let contentHeight = mainDOM[".l-aside__body > .content"].offsetHeight;

		const prev = e.originalSizeHeight - (event.clientY - e.startPositionY);
		
		consoleHeight = wholeHeight - contentHeight;
		contentHeight = prev;

		mainDOM[".l-aside__body > .developer-console"].style.height = lAsideConsoleHeightPercentage = 
		consoleHeight / wholeHeight * 100 + "%";
    	mainDOM[".l-aside__body > .content"].style.height = lAsideContentHeightPercentage = 
    	contentHeight / wholeHeight * 100 + "%";
	},
	(e)=>{
	}
);

function dropDownConsole() {
	if (mainDOM[".l-aside__body > .developer-console"].offsetHeight !== 20) {
		mainDOM[".l-aside__body > .developer-console"].style.minHeight = "20px";
		mainDOM[".l-aside__body > .content"].style.height = "100%";
		mainDOM[".l-aside__body > .developer-console"].style.height = "0";
		mainDOM[".developer-console__button"].style.transform = 'rotate(-90deg) scaleX(-1)';
		mainDOM[".l-aside__body > .content > .resize-bar"].style.display = "none";
	} else {
		mainDOM[".l-aside__body > .developer-console"].style.minHeight = "40px";
		mainDOM[".l-aside__body > .content"].style.height = lAsideContentHeightPercentage;
		mainDOM[".l-aside__body > .developer-console"].style.height = lAsideConsoleHeightPercentage;
		mainDOM[".developer-console__button"].style.transform = 'rotate(-90deg) scaleX(1)';
		mainDOM[".l-aside__body > .content > .resize-bar"].style.display = "inherit";
	}
}
mainDOM[".developer-console__button"].addEventListener('click', dropDownConsole);
