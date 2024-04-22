const header = document.querySelector(".console-scroller")
const leftButton = document.querySelector(".console__header > #before");
const rightButton = document.querySelector(".console__header > #after");

const verifyConsoleHeaderOverflow = () => {
    if (header.clientWidth < header.scrollWidth) {
        // Scroll buttons appear
       leftButton.style.display = "inline-block"
       rightButton.style.display = "inline-block"
    } else {
        // scroll buttons disappear
       leftButton.style.display = "none"
       rightButton.style.display = "none"
    }
}

const headerWidth = new ResizeObserver(entries => {verifyConsoleHeaderOverflow()});

const handleOverflowButtons = () => {headerWidth.observe(header)}

export default handleOverflowButtons;