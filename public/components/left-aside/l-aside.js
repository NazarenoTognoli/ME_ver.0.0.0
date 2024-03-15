import { toggleState } from './toggle-state.js'
import { applyResizeEvent, start, resizeProcess, end } from './resize.js'

let clickToggle = document.querySelector('.l-aside__button');

clickToggle.addEventListener('click', ()=>{
	toggleState()
});

applyResizeEvent(".l-aside__resize-bar", ".l-aside",
	(e)=> start(),
	(e)=> resizeProcess(e),
	(e)=> end()
);