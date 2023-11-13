
let defaultDOM = {};

fetch('http://localhost:5000/default/', {method: 'post'})
.then(response => {
	if (!response.ok) {
		throw new Error("Error en la Solicitud Default View" + response.status)
	}
	return response.json();
})
.then(data => {
	let defaultSection = document.createElement("section");
	defaultSection.classList.add("default-section", "section");
	mainDOM[".main"].appendChild(defaultSection);
	defaultSection.innerHTML = data;
	defaultLoadedDOM.onChange(true);
})
.catch(error => {
	console.log('Se produjo un error: ' + error);
})