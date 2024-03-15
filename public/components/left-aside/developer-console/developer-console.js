import { applyResizeEvent } from '../../../utils/shared.js'
const componentsDOM = (selector) => document.querySelector(selector)
//Make console resize
//Resize Event for left aside console
function lAsideRefreshHeight (value) {
	let contentStyle = window.getComputedStyle(componentsDOM(".l-aside__body > .content"));
	let consoleStyle = window.getComputedStyle(componentsDOM(".l-aside__body > .developer-console"));
		return value ? contentStyle.getPropertyValue("height") : consoleStyle.getPropertyValue("height");
}
let lAsideConsoleHeightPercentage = lAsideRefreshHeight(false);
let lAsideContentHeightPercentage = lAsideRefreshHeight(true);

applyResizeEvent(".l-aside__body > .content > .resize-bar", ".l-aside__body > .content", 
	(e)=>{},
	(e)=>{
		let wholeHeight = componentsDOM(".l-aside__body").offsetHeight;
    let consoleHeight = componentsDOM(".l-aside__body > .developer-console").offsetHeight;
    let contentHeight = componentsDOM(".l-aside__body > .content").offsetHeight;

		const prev = e.originalSizeHeight - (event.clientY - e.startPositionY);
		
		consoleHeight = wholeHeight - contentHeight;
		contentHeight = prev;

		componentsDOM(".l-aside__body > .developer-console").style.height = lAsideConsoleHeightPercentage = 
		consoleHeight / wholeHeight * 100 + "%";
    	componentsDOM(".l-aside__body > .content").style.height = lAsideContentHeightPercentage = 
    	contentHeight / wholeHeight * 100 + "%";
	},
	(e)=>{
	}
);

//Drop down console
function dropDownConsole() {
	if (componentsDOM(".l-aside__body > .developer-console").offsetHeight !== 20) {
		componentsDOM(".l-aside__body > .developer-console").style.minHeight = "20px";
		componentsDOM(".l-aside__body > .content").style.height = "100%";
		componentsDOM(".l-aside__body > .developer-console").style.height = "0";
		componentsDOM(".developer-console__header-button").style.transform = 'rotate(-90deg) scaleX(-1)';
		componentsDOM(".l-aside__body > .content > .resize-bar").style.display = "none";
	} else {
		componentsDOM(".l-aside__body > .developer-console").style.minHeight = "40px";
		componentsDOM(".l-aside__body > .content").style.height = lAsideContentHeightPercentage;
		componentsDOM(".l-aside__body > .developer-console").style.height = lAsideConsoleHeightPercentage;
		componentsDOM(".developer-console__header-button").style.transform = 'rotate(-90deg) scaleX(1)';
		componentsDOM(".l-aside__body > .content > .resize-bar").style.display = "inherit";
	}
}
componentsDOM(".developer-console__header-button").addEventListener('click', dropDownConsole);

//Control te size of the input for using all the height avaiable
function textareaMinHeightRefresh() {
	let textareaMinHeight = componentsDOM(".l-aside__body > .developer-console > .body").offsetHeight - 
	componentsDOM("#console > .records").offsetHeight;
	textarea.style.minHeight = textareaMinHeight + "px";
}

//Refresh when input is being introduced
componentsDOM("#console > textarea").addEventListener('input', textareaMinHeightRefresh);

//Register for the left aside console
const textarea = componentsDOM("#console > textarea");
const recordsContainer = componentsDOM("#console > .records");
let registredValue;
textarea.addEventListener('keydown', (event)=>{
	if (event.key === "Enter") {
		event.preventDefault();
		registredValue = textarea.value;
		let div = document.createElement('div');
		div.classList.add("record");
		div.innerHTML = registredValue;
		recordsContainer.appendChild(div);
		//eval(textarea.value);
		textarea.value = "";
		textareaMinHeightRefresh()
	}
})
textareaMinHeightRefresh()

//Responsive textarea minHeight for mother container changes in height
function handleTextareaMinHeightResponsive(entries) {
  for (let entry of entries) {
    const { target } = entry;
    if (target.clientHeight) {
      textareaMinHeightRefresh()
    } 
  }
}
const observeDeveloperConsoleBody = new ResizeObserver(handleTextareaMinHeightResponsive);
observeDeveloperConsoleBody.observe(componentsDOM(".l-aside__body > .developer-console > .body"));

//Activate buttons console and templates
componentsDOM(".console-btn").addEventListener('click', function () {
	this.classList.add("console-btn--active");
	componentsDOM(".templates-btn").classList.remove("templates-btn--active");
	componentsDOM("#console").style.display = "block";
	componentsDOM("#templates").style.display = "none";
	textareaMinHeightRefresh();
});
componentsDOM(".templates-btn").addEventListener('click', function () {
	this.classList.add("templates-btn--active");
	componentsDOM(".console-btn").classList.remove("console-btn--active");
	componentsDOM("#console").style.display = "none";
	componentsDOM("#templates").style.display = "block";
});

//templates background
function generateBackground() {
  const background = componentsDOM("#templates > .background");
  const fragment = document.createDocumentFragment();
  
  for (let i = 0; i < 50 * 50; i++) {
    const div = document.createElement('div');
    fragment.appendChild(div);
  }
  
  background.appendChild(fragment);
}
generateBackground();