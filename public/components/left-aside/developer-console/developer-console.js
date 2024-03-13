let devConDOM = defineDOM();
//Make console resize
let lAsideConsoleHeightPercentage = lAsideRefreshHeight(false);
let lAsideContentHeightPercentage = lAsideRefreshHeight(true);

applyResizeEvent("y", "oposite", ".l-aside__body > .content > .resize-bar", ".l-aside__body > .content", 
	(e)=>{},
	(e)=>{
		let wholeHeight = mainDOM[".l-aside__body"].offsetHeight;
    	let consoleHeight = devConDOM[".l-aside__body > .developer-console"].offsetHeight;
    	let contentHeight = mainDOM[".l-aside__body > .content"].offsetHeight;

		const prev = e.originalSizeHeight - (event.clientY - e.startPositionY);
		
		consoleHeight = wholeHeight - contentHeight;
		contentHeight = prev;

		devConDOM[".l-aside__body > .developer-console"].style.height = lAsideConsoleHeightPercentage = 
		consoleHeight / wholeHeight * 100 + "%";
    	mainDOM[".l-aside__body > .content"].style.height = lAsideContentHeightPercentage = 
    	contentHeight / wholeHeight * 100 + "%";
	},
	(e)=>{
	}
);

//Drop down console
function dropDownConsole() {
	if (devConDOM[".l-aside__body > .developer-console"].offsetHeight !== 20) {
		devConDOM[".l-aside__body > .developer-console"].style.minHeight = "20px";
		mainDOM[".l-aside__body > .content"].style.height = "100%";
		devConDOM[".l-aside__body > .developer-console"].style.height = "0";
		devConDOM[".developer-console__header-button"].style.transform = 'rotate(-90deg) scaleX(-1)';
		mainDOM[".l-aside__body > .content > .resize-bar"].style.display = "none";
	} else {
		devConDOM[".l-aside__body > .developer-console"].style.minHeight = "40px";
		mainDOM[".l-aside__body > .content"].style.height = lAsideContentHeightPercentage;
		devConDOM[".l-aside__body > .developer-console"].style.height = lAsideConsoleHeightPercentage;
		devConDOM[".developer-console__header-button"].style.transform = 'rotate(-90deg) scaleX(1)';
		mainDOM[".l-aside__body > .content > .resize-bar"].style.display = "inherit";
	}
}
devConDOM[".developer-console__header-button"].addEventListener('click', dropDownConsole);

//Control te size of the input for using all the height avaiable
function textareaMinHeightRefresh() {
	let textareaMinHeight = devConDOM[".l-aside__body > .developer-console > .body"].offsetHeight - 
	devConDOM["#console > .records"].offsetHeight;
	textarea.style.minHeight = textareaMinHeight + "px";
}

//Refresh when input is being introduced
devConDOM["#console > textarea"].addEventListener('input', textareaMinHeightRefresh);

//Register for the left aside console
const textarea = devConDOM["#console > textarea"];
const recordsContainer = devConDOM["#console > .records"];
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
observeDeveloperConsoleBody.observe(devConDOM[".l-aside__body > .developer-console > .body"]);

//Activate buttons console and templates
devConDOM[".console-btn"].addEventListener('click', function () {
	this.classList.add("console-btn--active");
	devConDOM[".templates-btn"].classList.remove("templates-btn--active");
	devConDOM["#console"].style.display = "block";
	devConDOM["#templates"].style.display = "none";
	textareaMinHeightRefresh();
});
devConDOM[".templates-btn"].addEventListener('click', function () {
	this.classList.add("templates-btn--active");
	devConDOM[".console-btn"].classList.remove("console-btn--active");
	devConDOM["#console"].style.display = "none";
	devConDOM["#templates"].style.display = "block";
});

//templates background
function generateBackground() {
  const background = devConDOM["#templates > .background"];
  const fragment = document.createDocumentFragment();
  
  for (let i = 0; i < 50 * 50; i++) {
    const div = document.createElement('div');
    fragment.appendChild(div);
  }
  
  background.appendChild(fragment);
}
generateBackground();