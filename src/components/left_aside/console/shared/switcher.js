function switcher(activeElement) {
    if (!document.querySelector(activeElement)) {
        console.error("Error not valid activeElement in console switcher function")
        return
    }
    document.querySelector(".console__body > div").forEach(element => {
        element.style.display = "none";
    })
    document.querySelector(activeElement).style.display = "inherit"
}

export default switcher
