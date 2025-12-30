let index = 0;
const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

function show(i) {
    slides.forEach(s => s.classList.remove("active"));
    slides[i].classList.add("active");
}

prev.onclick = () => {
    index = (index - 1 + slides.length) % slides.length;
    show(index);
};

next.onclick = () => {
    index = (index + 1) % slides.length;
    show(index);
};

setInterval(() => {
    index = (index + 1) % slides.length;
    show(index);
}, 3000);
