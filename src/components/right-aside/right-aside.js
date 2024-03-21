import { toggleState } from './toggle-state.js'
import { applyResizeEvent, start, resizeProcess, end } from './resize.js'
import * as subsectionButtons from './subsection-buttons/resize.js'
import './section-buttons/section-buttons.js'
import './subsection-buttons/subsection-buttons.js'

let clickToggle = document.querySelector(".r-aside__button");

clickToggle.addEventListener('click', ()=>{
  toggleState()
})
document.addEventListener('keydown', (event) => {
  if ((event.key === "l" || event.key === "L") && event.altKey) {
    toggleState();
  }
});

applyResizeEvent(".r-aside__resize-bar", ".r-aside",
  (e)=> start(e),
  (e)=> resizeProcess(e),
  (e)=> end(e)
)

applyResizeEvent(".r-aside__subsection-resize-bar", ".r-aside__subsection",
  (e)=>{},
  (e)=> subsectionButtons.resizeProcess(e),
  (e)=>{}
)