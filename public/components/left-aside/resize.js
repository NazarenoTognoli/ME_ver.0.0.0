import { adjustFlexSizes, removeTransition } from '../shared/aside-functions.js'
import { flex } from './toggle-state.js';

const lAside = document.querySelector(".l-aside")
const main = document.querySelector(".main")

let mainWidth, lAsideWidth;

const updateFlexSizes = () => {
	flex.update("lAside", (lAsideWidth / window.innerWidth) * 100 / 9)
	flex.update("main", (mainWidth / window.innerWidth) * 100 / 9)}

export function start() {
	removeTransition(true, lAside, main)
}

export function resizeProcess(e) {
	lAsideWidth = e.refresh("right")
	mainWidth = window.innerWidth - lAside.offsetWidth
	updateFlexSizes()
	adjustFlexSizes(flex.main, flex.lAside, "0")
}

export function end() {
	removeTransition(false, lAside, main)
}

export { applyResizeEvent } from '../../utils/shared.js'