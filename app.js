

const items = document.querySelectorAll(".div1");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        } else {
            entry.target.classList.remove("active");
        }
    });
}, { threshold: 0.5 }); // Added threshold for better intersection detection

items.forEach((item) => observer.observe(item));
