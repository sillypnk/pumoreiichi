// TODO: Height Adjuster
let height_desktop = document.querySelector(".desktop").offsetHeight;
let height_body = document.querySelector("body");

document.addEventListener("DOMContentLoaded", () => {
	height_body.style.height = height_desktop ** 2;
});
