const defaultConfig = () => ({
  width: ()=> 0,
  height: ()=> 0
});

const defaultOptions = () => ({});

let isResizing = false;

function resizeLogic({config = defaultConfig(), options = defaultOptions()}) {
    if (isResizing) return //Salida rapida de la función para evitar problemas de rendimiento

    options.originalSizeWidth = config.width();
    options.originalSizeHeight = config.height();

    function growOrDecrease(axis) {
      
      if (axis.toLowerCase() === "x") {  
        return event.clientX - options.startPositionX
      } else if (axis.toLowerCase() === "y") {
        return event.clientY - options.startPositionY
      } else {
        console.error(`growOrDecrease function invalid parameter: "${axis}"`);
      }
    }   

    options.refresh = function(directionParam) {
      
      const direction = directionParam.toLowerCase()
      const axis = direction === "right" || direction === "left" ? "x" : "y";

      const originalSize = options[`originalSize${axis === "x" ? "Width" : "Height"}`];
      
      if (direction === "right" || direction === "bottom") {
        return originalSize + growOrDecrease(axis)
      } else if (direction === "left" || direction === "top") {
        return originalSize - growOrDecrease(axis)
      } else {
        console.error(`resizeEvents.refresh function invalid parameter: "${direction}"`);
      }
    }

    const startActions = () => {
        document.addEventListener('mousemove', resizeActions);
        document.addEventListener('mouseup', stopActions);
        isResizing = true;
        
        options.startPositionX = event.clientX;
        options.startPositionY = event.clientY;
        
        options.originalSizeWidth = config.width();
        options.originalSizeHeight = config.height();
        
        if (config.startActions) {
          config.startActions(options);
        }
    }

    const resizeActions = () => {
      const excedeX = event.clientX > window.innerWidth || event.clientX < 0;
      const excedeY = event.clientY > window.innerHeight || event.clientY < 0;
      if (!isResizing) return
      if (excedeX || excedeY) return
      if (!config.resizeActions) {
        console.error("resize actions required");
        return
      }
      config.resizeActions(options);
    }

    const stopActions = () => {
        document.removeEventListener('mousemove', resizeActions);
        document.removeEventListener('mouseup', stopActions);
        isResizing = false;
        
        options.originalSizeWidth = config.width();
        options.originalSizeHeight = config.height();

        if (config.stopActions) {
          config.stopActions(options);
        }
    }

    return startActions
}

export default resizeLogic;