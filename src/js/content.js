export function createContent(root) {
    let elContent = document.createElement("div");
    elContent.innerText = "这是网页内容区";
    root.appendChild(elContent);
}