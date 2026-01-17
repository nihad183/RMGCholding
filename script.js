//CHIFFRES CLES
const counters = document.querySelectorAll(".stat h3[data-target]");
const options = {
    root: null, 
    threshold: 0.5 
};
function startCount(counter) {
    const target = +counter.getAttribute("data-target");
    let current = 0;
    const increment = target / 100;

    const updateCounter = setInterval(() => {
        current += increment;
        if (current >= target) {
            counter.innerText = "+" + target;
            clearInterval(updateCounter);
        } else {
            counter.innerText = "+" + Math.ceil(current);
        }
    }, 20);
}

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCount(entry.target);
            observer.unobserve(entry.target); 
        }
    });
}, options);
counters.forEach(counter => {
    observer.observe(counter);
});


//POURQUOI RMGC
const texts = [
    "Expertise reconnue",
    "Vision à long terme",
    "Transparence et conformité",
    "Accompagnement sur mesure"
];

const textElement = document.querySelector(".typing-text .text");

let index = 0;
let charIndex = 0;
let typing = true;

function typeEffect() {
    if (typing) {
        if (charIndex < texts[index].length) {
            textElement.textContent += texts[index][charIndex];
            charIndex++;
            setTimeout(typeEffect, 40); 
        } else {
            typing = false;
            setTimeout(typeEffect, 600);
        }
    } else {
        if (charIndex > 0) {
            textElement.textContent = texts[index].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeEffect, 40); 
        } else {
            typing = true;
            index = (index + 1) % texts.length; 
            setTimeout(typeEffect, 200);
        }
    }
}
window.addEventListener("load", typeEffect);

//model
const articles = document.querySelectorAll(".news article");
const modal = document.getElementById("newsModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const closeBtn = document.querySelector(".modal .close");

articles.forEach(article => {
    article.addEventListener("click", () => {
        const title = article.getAttribute("data-title");
        const img = article.getAttribute("data-img");
        const text = article.getAttribute("data-text");

        modalImg.src = img;
        modalTitle.innerText = title;
        modalText.innerText = text; 

        modal.style.display = "block";
    });
});


closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});


window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

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

//animation card services 
document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".service-card");

    function revealCards() {
        const triggerBottom = window.innerHeight * 0.80; 

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if(cardTop < triggerBottom){
                card.classList.add("show"); 
            }
        });
    }

    window.addEventListener("scroll", revealCards);
    revealCards(); 
});

//animation filiere
document.addEventListener("DOMContentLoaded", function() {
    const logos = document.querySelectorAll(".filiales-logos a");

    function revealLogos() {
        const triggerBottom = window.innerHeight * 0.85;

        logos.forEach((logo, index) => {
            const logoTop = logo.getBoundingClientRect().top;

            if(logoTop < triggerBottom){
                setTimeout(() => {
                    logo.classList.add("show");
                }, index * 160); 
            }
        });
    }

    window.addEventListener("scroll", revealLogos);
    revealLogos(); 
});