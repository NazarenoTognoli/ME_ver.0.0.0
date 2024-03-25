import { removeTransition } from '../shared/aside-functions.js'
import { lAside } from './toggle-state.js'

let lAsideWidth;

const updateSizeInPercentage = () => lAside.update(lAsideWidth / window.innerWidth * 100 + "vw")

export function start() {
	removeTransition(true, lAside.element)
}

export function resizeProcess(e) {
	lAsideWidth = e.refresh("right")
	updateSizeInPercentage()
	lAside.element.style.width = lAside.size
}

export function end() {
	removeTransition(false, lAside.element)
}

export { applyResizeEvent } from '../../utils/shared.js'