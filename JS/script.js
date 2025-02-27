document.addEventListener("DOMContentLoaded", function() {
    let fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach(el => {
        el.style.opacity = 0;
        setTimeout(() => {
            el.style.transition = "opacity 2s ease-in";
            el.style.opacity = 1;
        }, 500);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Select all anchor links that have href starting with "#"
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default jump behavior

            const targetId = this.getAttribute("href").substring(1); // Remove "#"
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjust offset if needed
                    behavior: "smooth" // Smooth scrolling effect
                });
            }
        });
    });
});