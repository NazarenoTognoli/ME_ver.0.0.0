import applyResizeEvent from './apply-resize-event.js'
import Console from './console-messages.jsx'

export const utils = {
    resize: applyResizeEvent,
    console: Console
};

export const toPixels = (reference) => (units) => units / 100 * reference

export const toPercentage = (reference) => (units) => units / reference * 100

export default utils