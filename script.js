// Loader
window.addEventListener("load", () => {
    document.querySelector(".loader").style.display = "none";
    document.body.style.opacity = "1";
});

// Scroll navbar
window.addEventListener("scroll", () => {
    document.querySelector("header")
        .classList.toggle("scrolled", window.scrollY > 50);
});

// Dark mode toggle
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".toggle");
    if (toggle) {
        toggle.addEventListener("click", () => {
            document.body.classList.toggle("dark");
        });
    }
});

// Live clock
setInterval(() => {
    const clock = document.getElementById("clock");
    if (clock) {
        clock.innerHTML = new Date().toLocaleTimeString();
    }
}, 1000);

// Counter animation me presje
const counters = document.querySelectorAll(".counter");
counters.forEach(counter => {
    const target = parseInt(counter.dataset.target);
    let count = 0;
    const speed = target / 200; // 200 hapa
    const update = () => {
        count += speed;
        if (count < target) {
            counter.innerText = Math.floor(count).toLocaleString();
            requestAnimationFrame(update);
        } else {
            counter.innerText = target.toLocaleString();
        }
    };
    update();
});

// Scroll reveal
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});

// Search filter
function filterTable() {
    let input = document.querySelector(".search").value.toLowerCase();
    let rows = document.querySelectorAll("tbody tr");
    rows.forEach(row => {
        row.style.display = row.innerText.toLowerCase().includes(input) ? "" : "none";
    });
}

// Smooth page transition
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (href.endsWith(".html")) {
            e.preventDefault();
            document.body.style.opacity = "0";
            setTimeout(() => window.location = href, 500);
        }
    });
});
