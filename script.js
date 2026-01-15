// Theme toggle
const toggle = document.getElementById("themeToggle");

if (toggle) {
  toggle.onclick = () => {
    document.body.classList.toggle("light");
    toggle.textContent = document.body.classList.contains("light") ? "🌞" : "🌙";
  };
}

// View more projects
const viewMoreBtn = document.getElementById("viewMoreBtn");
const hiddenProjects = document.querySelectorAll(".hidden-project");
const backHomeBtn = document.getElementById("backHomeBtn");

if (viewMoreBtn) {
  viewMoreBtn.addEventListener("click", () => {
    hiddenProjects.forEach(project => {
      project.style.display = "block";
    });

    viewMoreBtn.style.display = "none";
    backHomeBtn.style.display = "inline-block";
  });
}

// Contact form (demo only)
const contactForm = document.querySelector(".contact-card");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    contactForm.reset();
  });
}
