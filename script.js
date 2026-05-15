function joinNow() {
    alert("Welcome to FitZone Gym ");
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
            el.classList.remove("show");
        }
    });
});
const elements = document.querySelectorAll(".scroll");

function showOnScroll() {
    const triggerBottom = window.innerHeight * 0.8;

    elements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);


// Initialize EmailJS
(function(){
    emailjs.init("pX5Gihd0lDvItPtNj"); // yaha apni key daalna
})();

// Form submit
document.addEventListener("DOMContentLoaded", function() {
    let form = document.getElementById("contact-form");

    if(form){
        form.addEventListener("submit", function(e) {
            e.preventDefault();

            emailjs.sendForm("service_e0n1r5l", "template_2f893hk", this)
            .then(function() {
                alert("Message Sent Successfully ");
            }, function(error) {
                alert("Failed ");
            });
        });
    }
});
