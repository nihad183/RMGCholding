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

            // تحديث الخط
            if (isMobile) {
                progress.style.height = step.percentMobile;
            } else {
                progress.style.width = step.percent + "%";
            }

            // إظهار البطاقة
            if (step.card) step.card.classList.add("active");

            // تفعيل النقطة
            const dotIndex = sequence.indexOf(step);
            if (dots[dotIndex]) dots[dotIndex].classList.add("active");
        }, delay);
    }

    function startAnimation() {
        sequence.forEach((step, i) => {
            animateStep(step, i * 1200); // كل بطاقة بعد 2.2 ثانية من السابقة
        });

        // إظهار عنوان القسم مرة واحدة
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
