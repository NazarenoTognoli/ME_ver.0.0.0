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
    }
    else {
      this.listenersF.forEach(callback => callback());  
    } 
  } 
}
