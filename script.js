document.addEventListener('DOMContentLoaded', ()=> {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-item");

    function setActiveSection() {
        let currentSection = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop - 50 && window.scrollY < sectionTop + sectionHeight - 50) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
        });

        const activeLink = document.querySelector(`.navbar-nav .nav-item a[href="#${currentSection}"]`);
        if (activeLink) {
            activeLink.parentElement.classList.add("active");
        }
    }

    window.addEventListener("scroll", setActiveSection);
    setActiveSection(); 
});

document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    
    document.getElementById("copyrightYear").textContent = currentYear;
});
