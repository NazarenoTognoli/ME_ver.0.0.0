export const debugDefault = () => {
	//debug "reminders" constntent
	let defaultReminderBodyContent = [defaultDOM["#quote-1"], defaultDOM["#quote-2"], defaultDOM["#quote-3"]]
	let Flag = true;  
	for (let i = 0; i < 3; i++) {
		if (Flag) {
			defaultReminderBodyContent[i].innerHTML = `#${i} Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud `;
		}
		else {
			defaultReminderBodyContent[i].style.display = 'none';
		}
	}
	//Debug "task" content
	for (let i = 0; i < 3; i++) {
		let div = document.createElement('div');
		div.classList.add('default__tasking-body-div');
		defaultDOM[".default__tasking-body"].appendChild(div);
	}  
}

