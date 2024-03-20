import * as asideFunctions from '../shared/aside-functions.js'

let lAside = document.querySelector(".l-aside")
export const flex = new asideFunctions.Flex("1.8", "0", "7.2")

export function toggleState() {
	asideFunctions.minWidthAside(false, "right");
	const flexSize = window.getComputedStyle(lAside).getPropertyValue('flex');
	const none = "0 1 0%";
	if (flexSize === none) {
		asideFunctions.adjustFlexSizes(flex.main, flex.lAside, flex.rAside);
		asideFunctions.adjustImgInversion("-1", "1");
		asideFunctions.minWidthAside(true, "left");
	}
	else {
		asideFunctions.adjustFlexSizes("9", "0", "0");
		asideFunctions.adjustImgInversion("1", "1");
		asideFunctions.minWidthAside(false, "left");
	}
	asideFunctions.rAsideHiddenStylesFix(true);
}