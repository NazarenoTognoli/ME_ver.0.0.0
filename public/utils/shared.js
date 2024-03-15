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
                return objeto[prop];
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
class BooleanListener {
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
function applyResizeEvent(resizeElementParam, elementParam, startActions, resizeActions, stopActions, options = {}) {
  const obj = options;
  let isResizing = false;

  obj.resizeElement = document.querySelector(resizeElementParam);
  obj.resizeElement.addEventListener('mousedown', startResize);
  
  obj.element = document.querySelector(elementParam);

  obj.startPositionX = 0;
  obj.startPositionY = 0; 

  obj.originalSizeWidth = 0;
  obj.originalSizeHeight = 0;

  obj.growOrDecrease = function(axis) {
    if (axis.toLowerCase() === "x") {  
      return event.clientX - this.startPositionX
    } else if (axis.toLowerCase() === "y") {
      return event.clientY - this.startPositionY
    } else {
      console.error(`growOrDecrease function invalid parameter: "${axis}"`)
    }
  }

  obj.reminder = () => {
    console.log("event.clientX Aumenta cuando va hacia la derecha ? (+) : (-)")
    console.log("event.clientY Aumenta cuando va hacia abajo ? (+) : (-)")
  }

  obj.refresh = function(directionParam) {
    const direction = directionParam.toLowerCase()
    const axis = direction === "right" || direction === "left" ? "x" : "y";
    const originalSize = this[`originalSize${axis === "x" ? "Width" : "Height"}`]
    if (direction === "right" || direction === "bottom") {
      return originalSize + this.growOrDecrease(axis)
    } else if (direction === "left" || direction === "top") {
      return originalSize - this.growOrDecrease(axis)
    } else {
      console.error(`resizeEvents.refresh function invalid parameter: "${direction}"`)
    }
  }

  function startResize() {
    document.addEventListener('mousemove', resize);
    document.addEventListener('mouseup', stopResize);
    isResizing = true;

    obj.startPositionX = event.clientX;
    obj.startPositionY = event.clientY;
    
    obj.originalSizeWidth = obj.element.offsetWidth;
    obj.originalSizeHeight = obj.element.offsetHeight;
    
    startActions(obj);
    
    document.body.style.userSelect = 'none';
  }

  function resize() {
    if (isResizing) {
      resizeActions(obj);
    }
  }

  function stopResize() {
    document.removeEventListener('mousemove', resize);
    document.removeEventListener('mouseup', stopResize);
    isResizing = false;
    
    obj.originalSizeWidth = obj.element.offsetWidth;
    obj.originalSizeHeight = obj.element.offsetHeight;
    
    stopActions(obj);
    
    document.body.style.userSelect = '';
  }
}

export { defineDOM, loadCSS, applyResizeEvent, BooleanListener }