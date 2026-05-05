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
            el.classList.remove("show");
        }
    });
});

// ✅ EmailJS Integration (ALAG SE, niche)

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
                alert("Message Sent Successfully ✅");
            }, function(error) {
                alert("Failed ❌");
            });
        });
    }
});
