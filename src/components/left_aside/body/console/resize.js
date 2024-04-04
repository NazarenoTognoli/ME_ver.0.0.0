let brotherN0 = document.querySelector(".l-aside__body > .content")

let heightPx;
let heightPercentage;

let lAsideHeight = () => document.querySelector(".l-aside").offsetHeight

const updateSizeInPercentage = () => heightPercentage = heightPx / lAsideHeight() * 100;

export function resizeProcess(e) {
    heightPx = e.refresh("bottom")
    updateSizeInPercentage()
    e.element.style.height = heightPercentage + "%"
    brotherN0.style.height = 100 - updateSizeInPercentage() + "%";
}
