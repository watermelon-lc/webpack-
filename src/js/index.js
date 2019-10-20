import { createHeader } from "./header.js";
import { createSider } from "./sider.js";
import { createContent } from "./content.js";
import { createImg } from "./eleimg";
import img from "../images/1.jpg";
import "../css/index.css";

let root = document.querySelector("body");
createHeader(root);
createSider(root);
createContent(root);
createImg(root, img);