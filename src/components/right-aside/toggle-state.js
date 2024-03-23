import * as asideFunctions from '../shared/aside-functions.js'

export const rAside = new asideFunctions.Aside(document.querySelector(".r-aside"))

export function toggleState() {
	asideFunctions.minWidthAside(false, "left");
	const size = window.getComputedStyle(rAside.element).getPropertyValue('width');
	if (size === "0px") {
		asideFunctions.minWidthAside(true, "right");
		asideFunctions.adjustSizes("0", rAside.size)
		asideFunctions.adjustImgInversion(false, true);
		asideFunctions.rAsideHiddenStylesFix(false);
	}
	else {
		asideFunctions.minWidthAside(false, "right");
		asideFunctions.adjustSizes("0", "0")
		asideFunctions.adjustImgInversion(false, false);
		asideFunctions.rAsideHiddenStylesFix(true);
	}
}