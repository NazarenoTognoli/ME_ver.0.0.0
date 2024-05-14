export function resizeBiAside(left, width, setWidth, setIsResizing) {
    return {
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
    }
}