import { toPixels, toPercentage } from '@/utils/utils.js';

//BiAside is for both left and right aside components
export const resizeBiAside = ({
    left, 
    width, 
    setWidth, 
    setIsResizing, 
    allWidth = () => window.innerWidth
}) => ({
    width: () => toPixels(allWidth())(width),
    height: () => 0,
    startActions: () => {
        setIsResizing(true);
    },
    resizeActions: ({refresh}) => {
        const percentage = toPercentage(allWidth());
        const pixels = toPixels(allWidth());
        
        let newWidth = percentage(refresh(left ? "right" : "left"));
        
        if (pixels(newWidth) > allWidth() - 50) {
            newWidth = percentage(allWidth() - 50);
        } else {
            newWidth = newWidth;
        }
        
        setWidth(newWidth);
    },
    stopActions: () => {
        setIsResizing(false);
    }
});
//for console component inside left aside component
export const resizeConsole = ({
    consoleHeight, 
    setConsoleHeight, 
    setCustomizableContentHeight, 
    allHeight = () => window.innerHeight
}) => ({
    width: () => 0,
    height: () => toPixels(allHeight())(consoleHeight),
    resizeActions: ({refresh}) => {
        const percentage = toPercentage(allHeight());
        const pixels = toPixels(allHeight());

        let newConsoleHeight = percentage(refresh("bottom"));
        //Max and mix height config
        switch (true) {
            case pixels(newConsoleHeight) > (allHeight() - 40):
                newConsoleHeight = percentage(allHeight() - 40);
                break;
            case pixels(newConsoleHeight) < 85:
                newConsoleHeight = percentage(85);
                break;
            default:
                newConsoleHeight = newConsoleHeight;
        }

        setConsoleHeight(newConsoleHeight);
        setCustomizableContentHeight(percentage((allHeight() - pixels(newConsoleHeight))));
    }
});
//For console template input component inside console component inside left aside component
export const resizeConsoleTemplateInput = ({
    inputHeight,
    setInputHeight,
    setOutputHeight,
    allHeight
}) => ({
    width: () => 0,
    height: () => toPixels(allHeight())(inputHeight),
    resizeActions: ({refresh}) => {
        const percentage = toPercentage(allHeight());
        const pixels = toPixels(allHeight());

        let newInputHeight = ()=>percentage(refresh("top"));
        //Max and min height config
        switch(true) {
        case pixels(newInputHeight()) > (allHeight()):
            newInputHeight = ()=> percentage(allHeight());
            break;
        case pixels(newInputHeight()) < 40:
            newInputHeight = ()=> percentage(40);
        default:
            newInputHeight = newInputHeight;
        }
        setInputHeight(newInputHeight());
        setOutputHeight(percentage(allHeight() - pixels(newInputHeight())));
    }
});