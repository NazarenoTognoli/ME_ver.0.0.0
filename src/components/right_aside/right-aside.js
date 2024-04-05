import { toggleState } from './toggle-state.js'
import { start, resizeProcess, end } from './resize.js'
import './section_buttons/section-buttons.js'
import './subsection_buttons/subsection-buttons.js'
import * as subsectionButtons from './subsection_buttons/resize.js'
import utils from '/utils.js'

let clickToggle = document.querySelector(".r-aside__button");

clickToggle.addEventListener('click', ()=>{
  toggleState()
})
document.addEventListener('keydown', (event) => {
  if ((event.key === "l" || event.key === "L") && event.altKey) {
    toggleState();
  }
});

utils.resize(".r-aside__resize-bar", ".r-aside",
  (e)=> start(e),
  (e)=> resizeProcess(e),
  (e)=> end(e)
)