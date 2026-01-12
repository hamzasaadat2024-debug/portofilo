// Theme toggle
      const toggleBtn = document.getElementById("themeToggle");
      toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        if (document.body.classList.contains("light-mode")) {
          toggleBtn.textContent = "☀️ Light";
          toggleBtn.classList.remove("btn-outline-light");
          toggleBtn.classList.add("btn-outline-dark");
        } else {
          toggleBtn.textContent = "🌙 Dark";
          toggleBtn.classList.remove("btn-outline-dark");
          toggleBtn.classList.add("btn-outline-light");
        }
      });

      // Back-to-top button
      const backToTopBtn = document.getElementById("backToTop");
      window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
          backToTopBtn.style.display = "block";
        } else {
          backToTopBtn.style.display = "none";
        }
      });

      backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });


      // Back-to-Top Button Logic
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "flex"; // show button
  } else {
    backToTop.style.display = "none"; // hide button
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
