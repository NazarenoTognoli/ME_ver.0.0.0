let sourceItemTree = {};
let counter = 0;
function createNewLink(subID = "0", itemName = "undefined", subName = "uncategorized", itemLink = "https://www.youtube.com/") {
	let itemID = counter + 1;
	sourceItemTree[0 + "-" + itemID] = {subID: subID, itemID: itemID, itemName: itemName, subName: subName, itemLink: itemLink};
	let item = document.createElement("div");
	item.classList.add("source-item");
	let content = `<div class="source-item__header">
								<div class="cover"></div>
								<div class="text-cont">
									<div class="name">${itemName}</div>
									<div class="subsection">from:<span>${subName}</span></div>
								</div>
								<button class="update">MODIFY</button>
							</div>
							<div class="source-item__body">
								<div>
									<span>Insert Commands Here</span>
								</div>
								<a class="enter-button" href="${itemLink}" target="_blank"></a>
							</div>`;
	item.innerHTML = content;
	document.querySelector(".ISH-section > main").appendChild(item);
}

for (let i = 0; i < 8; i++) {
	let id = Object.keys(sourceItemTree).length + 1;
	createNewLink(id);
}