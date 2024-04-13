const all = document.querySelector("#default");
const output = document.querySelector("#default > .output")
let inputSizeInPixels;
let inputSizeInPercentage = () => inputSizeInPixels / all.offsetHeight * 100;
let outputSizeInPercentage = () => 100 - inputSizeInPercentage();

function resizeProcess(input) {
    inputSizeInPixels = input.refresh("top");
    input.element.style.height = inputSizeInPercentage() + "%";
    output.style.height = outputSizeInPercentage() + "%";
}

export default resizeProcess

