import * as asideFunctions from '../shared/aside-functions.js'

let rAside = document.querySelector(".r-aside");
export const flex = new asideFunctions.Flex("0", "1", "8");

export function toggleState() {
	asideFunctions.minWidthAside(false, "left");
	const flexSize = window.getComputedStyle(rAside).getPropertyValue('flex');
	const none = "0 1 0%"; 
	if (flexSize === none) {
		asideFunctions.minWidthAside(true, "right");
		asideFunctions.adjustFlexSizes(flex.main, "0", flex.rAside);
		asideFunctions.adjustImgInversion("1", "-1");
		asideFunctions.rAsideHiddenStylesFix(false);
	}
	else {
		asideFunctions.minWidthAside(false, "right");
		asideFunctions.adjustFlexSizes("9", "0", "0");
		asideFunctions.adjustImgInversion("1", "1");
		asideFunctions.rAsideHiddenStylesFix(true);
	}
}