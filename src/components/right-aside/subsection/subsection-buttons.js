const buttons = () => document.querySelectorAll(".r-aside__subsection-button")

function event() {
  buttons().forEach(button => button.classList.remove("r-aside__subsection-button--active"));
  this.classList.add("r-aside__subsection-button--active");
}

buttons().forEach(button => button.addEventListener('click', event));
