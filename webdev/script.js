
function initialize() {
    console.log("Page loaded");
    addTabFocus();

    let images = document.querySelectorAll("img");
    for (let i = 0; i < images.length; i++) {
        console.log("Image " + i + " ready");
    }
}


function upDate(previewPic) {
    console.log("Mouseover or focus triggered");

    let displayDiv = document.getElementById("image");
    displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";

    let descriptionDiv = document.getElementById("description");
    descriptionDiv.textContent = previewPic.alt;

    
    descriptionDiv.classList.add("emphasize");
}


function undo() {
    console.log("Mouseleave or blur triggered");

    let displayDiv = document.getElementById("image");
    displayDiv.style.backgroundImage = "url('')";

    let descriptionDiv = document.getElementById("description");
    descriptionDiv.textContent = "✨ Hover or TAB through the images below ✨";

    
    descriptionDiv.classList.remove("emphasize");
}


function addTabFocus() {
    let figures = document.querySelectorAll("figure");
    for (let i = 0; i < figures.length; i++) {
        figures[i].setAttribute("tabindex", "0");
        console.log("Tabindex added to figure " + i);
    }
}
