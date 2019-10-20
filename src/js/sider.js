export function createSider(root) {
    let elSider = document.createElement("div");
    elSider.innerText = "这是网页侧边栏";
    elSider.classList.add("sider");
    root.appendChild(elSider);
}