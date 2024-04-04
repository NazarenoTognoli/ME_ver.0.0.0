import { toggleState } from './toggle-state.js'
import { applyResizeEvent, start, resizeProcess, end } from './resize.js'
import * as subsectionButtons from './subsection_buttons/resize.js'
import './section_buttons/section-buttons.js'
import './subsection_buttons/subsection-buttons.js'

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