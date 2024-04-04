import { toggleState } from './toggle-state.js'
import { applyResizeEvent, start, resizeProcess, end } from './resize.js'
import './00_section_buttons/section-buttons.js'
import './01_subsection_buttons/subsection-buttons.js'
import * as subsectionButtons from './01_subsection_buttons/resize.js'

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