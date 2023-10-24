//Depurar seccion reminders
let dr = [document.querySelector('#dr-1'), document.querySelector('#dr-2'), document.querySelector('#dr-3')];
let drFlag = true; 
for (let i = 0; i < 3; i++) {
	if (drFlag) {
		dr[i].innerHTML = `#${i} Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud `;
	}
	else {
		dr[i].style.display = 'none';
	}
}
let dtBody = document.querySelector('.def-task-cont-body');
//Depurar seccion Task
for (let i = 0; i < 5; i++) {
	let div = document.createElement('div');
	div.classList.add('dtcb__div');
	dtBody.appendChild(div);
}