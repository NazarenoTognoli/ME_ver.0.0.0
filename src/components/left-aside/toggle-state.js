import * as asideFunctions from '../shared/aside-functions.js'

export const lAside = new asideFunctions.Aside(document.querySelector(".l-aside"))

export function toggleState() {
	asideFunctions.minWidthAside(false, "right");
	const size = window.getComputedStyle(lAside.element).getPropertyValue('width');
	if (size === "0px") {
		asideFunctions.adjustImgInversion("-1", "1");
		asideFunctions.minWidthAside(true, "left")
		asideFunctions.adjustSizes(lAside.size, "0")
	}
	else {
		asideFunctions.adjustImgInversion("1", "1");
		asideFunctions.minWidthAside(false, "left");
		asideFunctions.adjustSizes("0", "0")
	}
	asideFunctions.rAsideHiddenStylesFix(true);
}