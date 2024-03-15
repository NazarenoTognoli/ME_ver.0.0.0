const rAsideBodyHeight = document.querySelector(".r-aside__body").offsetHeight;

const section = document.querySelector(".r-aside__section");
const subsection = document.querySelector(".r-aside__subsection");

let sectionHeight, subsectionHeight;

const adjustSizesInPercentages = () => {
  subsection.style.height = subsectionHeight / rAsideBodyHeight * 100 + "%";
  section.style.height = sectionHeight / rAsideBodyHeight * 100 + "%";
}

const adjustSizesInPixeles = () => {
  subsection.style.height = subsectionHeight + "px";
  section.style.height = `calc(100% - ${subsectionHeight})`; 
}

export function resizeProcess(e) {
  subsectionHeight = e.refresh("top")

  if (subsectionHeight <= 33.17) {
    adjustSizesInPixeles() //to mantein consistency in different resolutions
    return;
  } 
  else if (subsectionHeight >= rAsideBodyHeight) {
    subsectionHeight = rAsideBodyHeight //to mantein consistency in different resolutions
  }

  sectionHeight = rAsideBodyHeight - subsectionHeight;

  adjustSizesInPercentages()
}