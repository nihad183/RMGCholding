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





document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector(".history-horizontal");
    const topCards = document.querySelectorAll(".top-row .timeline-card");
    const bottomCards = document.querySelectorAll(".bottom-row .timeline-card");
    const progress = document.querySelector(".timeline-progress");
    const dots = document.querySelectorAll(".timeline-dot");

    const sequence = [
        { card: topCards[0], percent: 5, percentMobile: "20%" },
        { card: bottomCards[0], percent: 40, percentMobile: "50%" },
        { card: topCards[1], percent: 70, percentMobile: "75%" },
        { card: bottomCards[1], percent: 100, percentMobile: "100%" }
    ];

    let started = false;

    function animateStep(step, delay) {
        setTimeout(() => {
            const isMobile = window.innerWidth <= 768;

       
            if (isMobile) {
                progress.style.height = step.percentMobile;
            } else {
                progress.style.width = step.percent + "%";
            }

            if (step.card) step.card.classList.add("active");

            
            const dotIndex = sequence.indexOf(step);
            if (dots[dotIndex]) dots[dotIndex].classList.add("active");
        }, delay);
    }

    function startAnimation() {
        sequence.forEach((step, i) => {
            animateStep(step, i * 1200); 
        });

    
        section.querySelectorAll("h2").forEach(h =>
            h.classList.add("show-line")
        );
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !started) {
                started = true;
                startAnimation();
            }
        });
    }, { threshold: 0.3 });

    observer.observe(section);
});


document.addEventListener("DOMContentLoaded", () => {

  const revealElements = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right"
  );

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); 
        }
      });
    },
    { threshold: 0.25 }
  );

  revealElements.forEach((el, index) => {
    el.style.transitionDelay = `${index * 110}ms`; 
    observer.observe(el);
  });

});
