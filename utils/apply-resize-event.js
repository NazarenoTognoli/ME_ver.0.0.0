function applyResizeEvent (resizeElementParam, elementParam, startActions, resizeActions, stopActions, options = {}) {
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
export default applyResizeEvent