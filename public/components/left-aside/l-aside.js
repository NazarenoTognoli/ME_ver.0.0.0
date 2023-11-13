//Left Aside Logic
function toggleLeftAsideState() {

	let flexSize = window.getComputedStyle(mainDOM[".l-aside"]).getPropertyValue('flex');
	let active = "0 1 0%";

	if (flexSize === active) {
		adjustFlexSizes("4", "1", "0");
		adjustImgInversion("-1", "1");
	}
	else {
		adjustFlexSizes("1", "0", "0");
		adjustImgInversion("1", "1");
	}
	rAsideButtonDisappear(true);
}
asideButtonFunctionsLoaded.onChange(true);

