import { removeTransition } from '../shared/aside-functions.js'
import { rAside } from './toggle-state.js'

let rAsideWidth

const updateSizeInPercentage = () => rAside.update(rAsideWidth / window.innerWidth * 100 + "vw")

export function start() {
  removeTransition(true, rAside.element)
}

export function resizeProcess(e) {
  rAsideWidth = e.refresh("left")
  updateSizeInPercentage()
  rAside.element.style.width = rAside.size
  
}

export function end() {
  removeTransition(false, rAside.element) 
}

export { applyResizeEvent } from '../../utils/shared.js'