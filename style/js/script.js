 // AOS Init
AOS.init({
  duration: 1000,
  once: true,
});

// Section Fade-In Animation
const sections = document.querySelectorAll(".section");
const showVisibleSections = () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
};
window.addEventListener("scroll", showVisibleSections);
window.addEventListener("load", showVisibleSections);

// Scroll Reveal (Backup to section fade)
const revealElements = document.querySelectorAll(".section");
const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  revealElements.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add("visible");
    } else {
      section.classList.remove("visible");
    }
  });
};
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Scroll Progress Bar
const progressBar = document.getElementById("scroll-progress");
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  progressBar.style.width = `${scrollPercent}%`;
});

// Dark Mode Toggle
const toggleBtn = document.getElementById("dark-toggle");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}

// Typewriter Effect
const typewriter = (element, text, speed = 100) => {
  let i = 0;
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
};
window.onload = () => {
  const title = document.getElementById("typed-name");
  if (title) {
    typewriter(title, "Hi, I'm Vedant ", 120);
  }
};

// Parallax Effect
document.addEventListener("mousemove", (e) => {
  document.querySelectorAll(".parallax").forEach(layer => {
    const speed = layer.getAttribute("data-speed");
    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
});

// Performance Check
let isLowPerformance = false;
if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) {
  isLowPerformance = true;
}
if (!isLowPerformance) {
  // Future extension
}


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const popup = document.getElementById("success-popup");

  if (form && popup) {
    form.addEventListener("submit", function () {
      // Delay popup to ensure no scroll happens before
      setTimeout(() => {
        popup.classList.add("show");

        // Hide popup after 3 seconds
        setTimeout(() => {
          popup.classList.remove("show");
        }, 4000000);
      }, 100); // slight delay to avoid default jump
    });
  }

  // Prevent auto scroll to iframe anchor (if any)
  if (window.location.hash && window.location.hash.includes("thank-you")) {
    history.replaceState(null, null, " "); // removes the #hash silently
  }
});


if (window.location.hash && window.location.hash.includes("thank-you")) {
  history.replaceState(null, null, " "); // removes #thank-you
}


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2 // adjust as needed
});

document.querySelectorAll('.animate-left, .animate-up').forEach(el => {
  observer.observe(el);
});
