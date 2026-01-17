
//menu phone
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.querySelector('.overlay');
    if(navLinks.style.right === "0px"){
        navLinks.style.right = "-300px";
        overlay.classList.remove("active");
    } else {
        navLinks.style.right = "0px";
        overlay.classList.add("active");
    }
}

function closeMenu() {
    document.querySelector('.nav-links').style.right = "-300px";
    document.querySelector('.overlay').classList.remove("active");
}

