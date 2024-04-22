export function removeTransition(remove, side) {
    side.style.transition = remove ? "none" : "width .3s ease"
}

//The rAsideButtonDisappear function is to fix problems with the right side styles when it contracts
let activeClassSection, activeClassSubsection;
export function rAsideHiddenStylesFix(hide) {
    const getActiveClass = (section) => ({class: `r-aside__${section === "section" ? "section" : "subsection"}-button--active`})
    if (!activeClassSection || !activeClassSubsection) {
        activeClassSection = getActiveClass("section")
        activeClassSubsection = getActiveClass("subsection")
    }
    let activeClass;
    const removeBodyMargin = (section) => {
        document.querySelector(`.r-aside__${section === "section" ? "section" : "subsection-body"}`).
        style.marginRight = hide ? "0" : "5px"}
    
    const removeActiveClass = (button) => {
            activeClass.exist = button;
            button.classList.remove(activeClass.class)}
    
    const addActiveClass = () => activeClass.exist.classList.add(activeClass.class)
    
    const activeClassConditions = (button) => {
        if (button.classList.contains(activeClass.class) && hide) {//Check if the button has the class and if hide then remove active
            removeActiveClass(button)}
        if (activeClass.exist && !hide) {//Check if there is something active and if is not hide then will add active
            addActiveClass()}}
    
    const handleActiveClass = (buttons) => {
        activeClass = buttons.includes("subsection") ? activeClassSubsection : activeClassSection;
        document.querySelectorAll(buttons).forEach(button => {
            button.style.cursor = hide ? "default" : "pointer"
            activeClassConditions(button)
        })}

    handleActiveClass(".r-aside__section-button")
    handleActiveClass(".r-aside__subsection-button")

    removeBodyMargin("section")
    removeBodyMargin("subsection")
}
