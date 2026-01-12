/* --------------------------------------------------
   ADVANCED ANIMATION ENGINE
-------------------------------------------------- */

// Fade-in on scroll
function revealOnScroll() {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
}

// Tilt effect on hover
function tiltCards() {
  const cards = document.querySelectorAll(".tilt");

  cards.forEach(card => {
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = ((y / rect.height) - 0.5) * 10;
      const rotateY = ((x / rect.width) - 0.5) * -10;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0) rotateY(0)";
    });
  });
}

// Parallax hero background
function parallaxHero() {
  const hero = document.querySelector(".hero");

  window.addEventListener("scroll", () => {
    const offset = window.scrollY * 0.3;
    hero.style.backgroundPositionY = `${offset}px`;
  });
}

// Stats counter (scroll-triggered)
function animateCounter(id, target) {
  let count = 0;
  const speed = target / 100;

  const update = () => {
    if (count < target) {
      count += speed;
      document.getElementById(id).textContent = Math.floor(count);
      requestAnimationFrame(update);
    }
  };

  update();
}

function triggerCounters() {
  const stats = document.getElementById("stats");

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateCounter("projectsCount", 25);
      animateCounter("clientsCount", 10);
      animateCounter("hoursCount", 500);
      animateCounter("coffeeCount", 120);
      observer.disconnect();
    }
  });

  observer.observe(stats);
}

/* --------------------------------------------------
   INITIALIZE ALL ANIMATIONS
-------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  revealOnScroll();
  tiltCards();
  parallaxHero();
  triggerCounters();
});

/* --------------------------------------------------
   CURSOR TRAIL ANIMATION
-------------------------------------------------- */

document.addEventListener("mousemove", function (e) {
  const trail = document.createElement("div");
  trail.className = "cursor-trail";
  document.body.appendChild(trail);

  trail.style.left = e.pageX + "px";
  trail.style.top = e.pageY + "px";

  setTimeout(() => {
    trail.remove();
  }, 500); // remove after animation
});
/* --------------------------------------------------
   PROFESSIONAL SOFT BLUR CURSOR TRAIL
-------------------------------------------------- */

document.addEventListener("mousemove", function (e) {
  const dot = document.createElement("div");
  dot.className = "cursor-softtrail";
  document.body.appendChild(dot);

  dot.style.left = e.pageX + "px";
  dot.style.top = e.pageY + "px";

  setTimeout(() => {
    dot.remove();
  }, 700);
});
document.addEventListener("mousemove", function (e) {
  const dot = document.createElement("div");
  dot.className = "cursor-softtrail";
  document.body.appendChild(dot);

  dot.style.left = e.pageX + "px";
  dot.style.top = e.pageY + "px";

  setTimeout(() => {
    dot.remove();
  }, 600);
});
/* --------------------------------------------------
   CINEMATIC SKILL BAR ANIMATION
-------------------------------------------------- */

const skillBars = document.querySelectorAll(".skill-bar");
let skillAnimated = false;

function animateSkills() {
  if (skillAnimated) return;

  skillBars.forEach((bar) => {
    const value = bar.getAttribute("data-value");
    const progress = bar.querySelector(".progress-bar");

    // Animate width
    progress.style.width = value + "%";

    // Animate number counter
    let count = 0;
    const counter = setInterval(() => {
      count++;
      progress.textContent = count + "%";
      if (count >= value) clearInterval(counter);
    }, 20);
  });

  skillAnimated = true;
}

window.addEventListener("scroll", () => {
  const skillsSection = document.getElementById("skills");
  const rect = skillsSection.getBoundingClientRect();

  if (rect.top < window.innerHeight - 100) {
    animateSkills();
  }
});





window.onload = function() {
  const card = document.getElementById("notify-card");
  const closeBtn = document.getElementById("close-btn");

  // Show card on load
  card.classList.remove("hidden");
  card.classList.add("show");

  // User must close it manually
  closeBtn.addEventListener("click", () => {
    card.classList.remove("show");
    setTimeout(() => {
      card.classList.add("hidden");
    }, 400); // wait for animation
  });
};
 AOS.init({ duration: 1000, once: true }); 


 const notifyCard = document.getElementById("notify-card");
const closeBtn = document.getElementById("close-btn");

// Show card on page load
window.addEventListener("load", () => {
  setTimeout(() => {
    notifyCard.classList.add("show");
  }, 500);
});

// Close with shrink animation
closeBtn.addEventListener("click", () => {
  notifyCard.classList.remove("show");
  notifyCard.classList.add("hide");
  setTimeout(() => {
    notifyCard.classList.remove("hide");
  }, 600); // match shrinkOut duration
});
