//Manipulción del DOM
function createDOM(objeto, all, ...elementos) {
  for (let i = 0; i < elementos.length; i++) {
  	if (all) {
      objeto[elementos[i]] = document.querySelectorAll(elementos[i]);
    }
  	else {
		  objeto[elementos[i]] = document.querySelector(elementos[i]);
  	}	
  }
}
//Boolean Values Listener Instance Creator
class booleanListener {
  value = undefined;
  listenersF = [];
  listenersT = [];
  onChange(newValue) {
    if (this.value !== newValue) {
      this.value = newValue;
      this.dispatchEvent();
    }
  }
  addEventListenerF(callback) {
    this.listenersF.push(callback);
  }
  addEventListenerT(callback) {
    this.listenersT.push(callback);
  }
  dispatchEvent() {
    if (this.value) {
      this.listenersT.forEach(callback => callback());
    }else {
      this.listenersF.forEach(callback => callback());  
    }
  } 
}
//Carga de CSS bajo demanda
function loadCSS(load, identifier, href = undefined) {
  if (load) {
    let link = document.createElement("link");
    link.classList.add(identifier);
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = href;
    mainDOM["head"].appendChild(link);  
  } else {
    let link = document.querySelector("." + identifier);
    mainDOM["head"].removeChild(link);  
  }
}