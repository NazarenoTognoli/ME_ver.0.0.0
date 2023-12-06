//DOM Manipulation
function createDOM(objeto, all, ...elementos) {
  elementos.forEach(elemento => {
    if (all) {
      objeto[elemento] = document.querySelectorAll(elemento);
    } else {
      objeto[elemento] = document.querySelector(elemento);
    }
  });
}
function createProxyDOM(objeto) {
  const handleNonExistenceDOM = {
    get: function(target, prop) {
          if (!(prop in target)) {
            let elementProp = document.querySelectorAll(prop);
            if (elementProp.length !== 0) {
              //console.log("New Element/s Found: " + prop);
                createDOM(
                  objeto,
                  elementProp.length !== 1,
                  prop
                )
                return mainDOM[prop]; 
            } else {
              console.error("Element/s not found: " + prop)
              return undefined
            }
          }
          return target[prop];
      }
  }
  return new Proxy(objeto, handleNonExistenceDOM);
}
function defineDOM() {
  let objeto = {};
  objeto = createProxyDOM(objeto);
  return objeto 
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
//Manejo de elementos redimensionables
let applyResizeEventOBJ = {
  x: {ahead: {}, oposite: {}},
  y: {ahead: {},oposite: {}},
  xy: {ahead: {},oposite: {}}
};
function applyResizeEvent(axisParam, directionParam, resizeElementParam, elementParam, startActions, resizeActions, stopActions) {
  let axis = axisParam.toLowerCase();
  let direction = directionParam.toLowerCase();
  applyResizeEventOBJ[axis][direction][elementParam] = {};
  let e = applyResizeEventOBJ[axis][direction][elementParam];
  //Required Variables
  e.resizeElement = document.querySelector(resizeElementParam);
  e.resizeElement.addEventListener('mousedown', startResize);
  e.element = document.querySelector(elementParam);
  let isResizing = false;
  //Could change between x and y or both
  e.startPositionX = 0;
  e.startPositionY = 0; 
  //Could change between height and width or both
  e.originalSizeWidth = 0;
  e.originalSizeHeight = 0;
  
  //============================================================================================================================================================================
  //Called Asociated to the element navbar
  function startResize() {
    //events only existing in the call of startResize until the end
    document.addEventListener('mousemove', resize);
    document.addEventListener('mouseup', stopResize);
    isResizing = true;
    e.startPositionX = event.clientX;
    e.startPositionY = event.clientY;
    e.originalSizeWidth = e.element.offsetWidth;
    e.originalSizeHeight = e.element.offsetHeight;
    startActions(e);
  }
  //============================================================================================================================================================================
  function resize() {
    if (isResizing) {
      //Size of element being applied the event
      //event.clientX Aumenta cuando va hacia la derecha
      //event.clientY Aumenta cuando va hacia abajo
      resizeActions(e);
    }
  }
  //============================================================================================================================================================================
  function stopResize() {
    document.removeEventListener('mousemove', resize);
    document.removeEventListener('mouseup', stopResize);
    isResizing = false;
    e.originalSizeWidth = e.element.offsetWidth;
    e.originalSizeHeight = e.element.offsetHeight;
    stopActions(e);
  }
}
