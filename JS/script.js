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
document.addEventListener("DOMContentLoaded", function () {
    // Create the section indicator
    const indicator = document.createElement("div");
    indicator.classList.add("section-indicator");
    document.body.appendChild(indicator);

    const sections = document.querySelectorAll("section");

    // Corrected section mapping (Unique keys)
    const sectionText = {
        "bgind1": "VISION",
        "section-bg2": "MISSION",
        "bgind2": "STRATEGIC OBJECTIVES",
        "team-section": "EVENTS",
        "secs": "THE TEAM",
        "main-section": "" // Home section (empty to hide)
    };

    let currentText = ""; // Track current text to prevent unnecessary updates

    function updateIndicator() {
        let activeSection = null;

        // Detect which section is in the viewport
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                activeSection = section;
            }
        });

        if (activeSection) {
            // Ensure we find the correct section class
            let sectionClass = "";
            activeSection.classList.forEach(cls => {
                if (sectionText[cls]) {
                    sectionClass = cls;
                }
            });

            const newText = sectionText[sectionClass] || "";

            if (newText !== currentText) { // Update only if the text has changed
                // Smooth morphing effect
                indicator.style.opacity = "0";
                setTimeout(() => {
                    indicator.textContent = newText;
                    indicator.style.opacity = "1";
                }, 300);
                currentText = newText;
            }

            // Hide indicator when on the home section
            if (activeSection.classList.contains("main-section")) {
                indicator.style.opacity = "0";
                return;
            }
        }
    }

    window.addEventListener("scroll", updateIndicator);
    updateIndicator(); // Initial check
});
