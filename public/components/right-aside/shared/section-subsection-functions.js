export function applyActiveStyles() {
    const buttons = () => document.querySelectorAll(".r-aside__section-button")

    function event() {
        buttons().forEach(button => button.classList.remove("r-aside__section-button--active"))
        this.classList.add("r-aside__section-button--active")
    }

    buttons().forEach(button => button.addEventListener('click', event))
}