//DUMMY WAY TO HANDLE SOURCE-ITEMS (NOT DEFINITIVE)
//for ishMainWidth > 914.77
let sourceItemLength = document.querySelectorAll(".source-item").length > 0; 
function largeMain() {
	sourceItemLength = document.querySelectorAll(".source-item").length > 0
	let secondItem = document.querySelector(".source-item:nth-of-type(2)");
	if (secondItem) {secondItem.style.marginTop = "0";}
	for (let i = 0; i < document.querySelectorAll(".source-item").length; i++) {
		document.querySelectorAll(".source-item")[i].style.width = "49%";
		if (i % 2 === 0) {
			document.querySelectorAll(".source-item")[i].style.marginRight = "1%";
			document.querySelectorAll(".source-item")[i].style.marginLeft = "1%"
		} else {
			document.querySelectorAll(".source-item")[i].style.marginLeft = "0";
		}
	}
	if (document.querySelector(".ISH-section > main").scrollHeight > document.querySelector(".ISH-section > main").clientHeight) {
		document.querySelector(".ISH-section > main").style.justifyContent = "flex-start";	
		//Error produced .forEach func only works for all nodeList elements (quick approach replace them for, for loops)
		if (sourceItemLength) {
			document.querySelectorAll(".source-item").forEach(element => {
					element.style.width = "48.5%";
			})
		}else {
			document.querySelector(".source-item").style.width = "48.5%";
		}
		//console.log("Tiene Overflow")
	} else {
		document.querySelector(".ISH-section > main").style.justifyContent = "center";
		if (sourceItemLength) {
			document.querySelectorAll(".source-item").forEach(element => {
					element.style.width = "49%";
					//console.log("NO Tiene Overflow");
			});
		} else {
			document.querySelector(".source-item").style.width = "49%";
		}
	}
}
//for ishMainWidth < 914.77
function shortMain() {
		sourceItemLength = document.querySelectorAll(".source-item").length > 0
		document.querySelector(".ISH-section > main").style.justifyContent = "center";
		let secondItem = document.querySelector(".source-item:nth-of-type(2)"); 
		if (secondItem) {secondItem.style.marginTop = "15px";}
		if (document.querySelector(".ISH-section > main").scrollHeight > document.querySelector(".ISH-section > main").clientHeight) {
			if (sourceItemLength) {
				document.querySelectorAll(".source-item").forEach(element => {
					element.style.width = "98%";
					element.style.marginLeft = "0";
					element.style.marginRight = "0";
				})
			} else {
				document.querySelector(".source-item").style.width = "98%";
				document.querySelector(".source-item").style.marginLeft = "0";
				document.querySelector(".source-item").style.marginRight = "0";
			}
		} else {
			if (sourceItemLength) {
				document.querySelectorAll(".source-item").forEach(element => {
					element.style.width = "99%";
					element.style.marginLeft = "1%";
					element.style.marginRight = "0";
				})
			} else {
					document.querySelector(".source-item").style.width = "99%";
					document.querySelector(".source-item").style.marginLeft = "1%";
					document.querySelector(".source-item").style.marginRight = "0";
			}
		}
}
//Apply functions for main
function handleMainResizeResponsive(entries) {
	sourceItemLength = document.querySelectorAll(".source-item").length > 0
  for (let entry of entries) {
    const { target } = entry;
    if (target.clientWidth < 914.77) {
      shortMain();
    } 
    else if (target.clientWidth > 914.77 && !sourceItemLength) {
      shortMain();
    } else {
    	largeMain();
    }
  }
}

const observeMain = new ResizeObserver(handleMainResizeResponsive);
observeMain.observe(document.querySelector(".ISH-section > main"));