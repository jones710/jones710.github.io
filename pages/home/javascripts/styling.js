/*
// Start of sorting buttons' javascript

var sort_btns = document.getElementsByClassName("sorting-btn");

// Add a click event listener to each element
for (var i = 0; i < sort_btns.length; i++) {
    sort_btns[i].addEventListener("click", function() {
        // Toggle the "sort_active" class
        this.classList.toggle("sort_active");
    });
}
*/

// End of sorting buttons' javascript

// Start of navigation links 

var navLinks = document.querySelectorAll(".links a")

navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        navLinks.forEach(link => link.classList.remove("active"));
        this.classList.add("active");
    });
});

// End of navigation links 

// Start of dropdown menu 

var menuArrow = document.getElementById("menu-arrow")
var dropdownMenu = document.getElementById("dropdown-menu")
var rotation = 0;

function menuArrowRotation(){
    if (rotation == 0){
        rotation -= 180;
        menuArrow.style.transform = "rotate(" + String(rotation) + "deg)";
        dropdownMenu.style.marginTop = "0";
    } else {
        rotation = 0
        menuArrow.style.transform = "rotate(" + String(rotation) + "deg)";
        dropdownMenu.style.marginTop = "-180%";
    }
}

var menuLinks = document.querySelectorAll(".menu-links div")

menuLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        menuLinks.forEach(link => link.classList.remove("active"));
        this.classList.add("active");
    });
});

// End of dropdown menu 

var searchArrow = document.getElementById("search-arrow");
var arrowRotation = 0;

function searchArrowRotation(){
    if (arrowRotation == 0){
        arrowRotation -= 180;
        searchArrow.style.transform = "rotate(" + String(arrowRotation) + "deg)";
    } else {
        arrowRotation = 0
        searchArrow.style.transform = "rotate(" + String(arrowRotation) + "deg)";
    }
}