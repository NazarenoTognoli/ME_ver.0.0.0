import { toggleState } from './toggle-state.js'
import { applyResizeEvent, start, resizeProcess, end } from './resize.js'
import './00_console/console.js'

let clickToggle = document.querySelector('.l-aside__button')

clickToggle.addEventListener('click', ()=>{
	toggleState()
});

document.addEventListener('keydown', (event) => {
  if ((event.key === "a" || event.key === "A") && event.altKey) {
    toggleState();
  }
});


applyResizeEvent(".l-aside__resize-bar", ".l-aside",
	(e)=> start(),
	(e)=> resizeProcess(e),
	(e)=> end()
);