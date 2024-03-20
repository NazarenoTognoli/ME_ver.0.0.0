import { adjustFlexSizes, removeTransition } from '../shared/aside-functions.js'
import { flex } from './toggle-state.js'

const rAside = document.querySelector(".r-aside")
const main = document.querySelector(".main")

let mainWidth, rAsideWidth;
let bodyWidth = document.querySelector("#root").offsetWidth;

const updateFlexSizes = () => {
  flex.update("rAside", (rAsideWidth / window.innerWidth) * 100 / 9)
  flex.update("main", (mainWidth / window.innerWidth) * 100 / 9)}

export function start() {
  removeTransition(true, rAside, main)
}

export function resizeProcess(e) {
  rAsideWidth = e.refresh("left")
  mainWidth = bodyWidth - rAside.offsetWidth
  updateFlexSizes()
  adjustFlexSizes(flex.main, "0", flex.rAside);
}

export function end() {
  removeTransition(false, rAside, main) 
}

export { applyResizeEvent } from '../../utils/shared.js'