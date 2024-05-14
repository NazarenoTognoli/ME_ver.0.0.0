export const resizeBiAside = (left, width, setWidth, setIsResizing) => ({
    width: () => width / 100 * window.innerWidth,
    height: () => 0,
    startActions: (options) => {
        setIsResizing(true);
    },
    resizeActions: (options) => {
        setWidth(options.refresh(left ? "right" : "left") / window.innerWidth * 100);
    },
    stopActions: (options) => {
        setIsResizing(false);
    }
});

export const resizeConsole = (height, setConsoleHeight, setCustomizableContentHeight) => ({
    width: () => 0,
    height: () => ''
});