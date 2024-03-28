const consoleTemplate = () => document.querySelectorAll(".console__template");

const removeActiveClass = () => {
    consoleTemplate().forEach(template => {
        template.classList.remove("console__template--active");
    })
}

consoleTemplate().forEach(template => {
    template.addEventListener('click', function() {
        removeActiveClass()
        this.classList.add("console__template--active");
    })
})