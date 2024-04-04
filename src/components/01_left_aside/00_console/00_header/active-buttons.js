const consoleTemplate = () => document.querySelectorAll(".console__template-button");

const removeActiveClass = () => {
    consoleTemplate().forEach(template => {
        template.id = "";
    })
}

consoleTemplate().forEach(template => {
    template.addEventListener('click', function() {
        removeActiveClass()
        this.id = "console__template-button--active";
    })
})