
//Make console resize
let lAsideConsoleHeightPercentage = lAsideRefreshHeight(false);
let lAsideContentHeightPercentage = lAsideRefreshHeight(true);

applyResizeEvent("y", "oposite", ".l-aside__body > .content > .resize-bar", ".l-aside__body > .content", 
	(e)=>{},
	(e)=>{
		let wholeHeight = mainDOM[".l-aside__body"].offsetHeight;
    	let consoleHeight = mainDOM[".l-aside__body > .developer-console"].offsetHeight;
    	let contentHeight = mainDOM[".l-aside__body > .content"].offsetHeight;

		const prev = e.originalSizeHeight - (event.clientY - e.startPositionY);
		
		consoleHeight = wholeHeight - contentHeight;
		contentHeight = prev;

		mainDOM[".l-aside__body > .developer-console"].style.height = lAsideConsoleHeightPercentage = 
		consoleHeight / wholeHeight * 100 + "%";
    	mainDOM[".l-aside__body > .content"].style.height = lAsideContentHeightPercentage = 
    	contentHeight / wholeHeight * 100 + "%";
	},
	(e)=>{
	}
);

//Drop down console
function dropDownConsole() {
	if (mainDOM[".l-aside__body > .developer-console"].offsetHeight !== 20) {
		mainDOM[".l-aside__body > .developer-console"].style.minHeight = "20px";
		mainDOM[".l-aside__body > .content"].style.height = "100%";
		mainDOM[".l-aside__body > .developer-console"].style.height = "0";
		mainDOM[".developer-console__header-button"].style.transform = 'rotate(-90deg) scaleX(-1)';
		mainDOM[".l-aside__body > .content > .resize-bar"].style.display = "none";
	} else {
		mainDOM[".l-aside__body > .developer-console"].style.minHeight = "40px";
		mainDOM[".l-aside__body > .content"].style.height = lAsideContentHeightPercentage;
		mainDOM[".l-aside__body > .developer-console"].style.height = lAsideConsoleHeightPercentage;
		mainDOM[".developer-console__header-button"].style.transform = 'rotate(-90deg) scaleX(1)';
		mainDOM[".l-aside__body > .content > .resize-bar"].style.display = "inherit";
	}
}
mainDOM[".developer-console__header-button"].addEventListener('click', dropDownConsole);

//Control te size of the input for using all the height avaiable
function textareaMinHeightRefresh() {
	let textareaMinHeight = mainDOM[".l-aside__body > .developer-console > .body"].offsetHeight - 
	mainDOM[".l-aside__body > .developer-console > .body > .records"].offsetHeight;
	textarea.style.minHeight = textareaMinHeight + "px";
}

//Refresh when input is being introduced
mainDOM[".l-aside__body > .developer-console > .body > textarea"].addEventListener('input', textareaMinHeightRefresh);

//Register for the left aside console
const textarea = mainDOM[".l-aside__body > .developer-console > .body > textarea"];
const recordsContainer = mainDOM[".l-aside__body > .developer-console > .body > .records"];
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
observeDeveloperConsoleBody.observe(mainDOM[".l-aside__body > .developer-console > .body"]);