// Join button
function joinNow() {
    alert("Welcome to FitZone Gym 💪");
}

// Scroll Animation
window.addEventListener("scroll", function () {
    let elements = document.querySelectorAll(".scroll");

    elements.forEach((el) => {
        let position = el.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.3;

        if (position < screenPosition) {
            el.classList.add("show");
        } else {
            el.classList.remove("show"); // ADD THIS LINE
        }
    });
});