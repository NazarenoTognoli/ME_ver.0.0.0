import { toggleState } from './functions/toggle-state.js'
import { start, resizeProcess, end } from './resize-bar/resize.js'
import './body/console/console.js'
import utils from '../../utils/utils.js'

let clickToggle = document.querySelector('.l-aside__button')

clickToggle.addEventListener('click', ()=>{
	toggleState()
});

document.addEventListener('keydown', (event) => {
  if ((event.key === "a" || event.key === "A") && event.altKey) {
    toggleState();
  }
});


utils.resize(".l-aside__resize-bar", ".l-aside",
	(e)=> start(),
	(e)=> resizeProcess(e),
	(e)=> end()
);