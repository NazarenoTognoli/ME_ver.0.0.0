export function applyActiveStyles(identifier) {
    const active = identifier + "--active"
    function event() {
        document.querySelectorAll("." + identifier).forEach(button => button.classList.remove(active))
        this.classList.add(active)
    }

    document.querySelectorAll("." + identifier).forEach(button => button.addEventListener('click', event))
}