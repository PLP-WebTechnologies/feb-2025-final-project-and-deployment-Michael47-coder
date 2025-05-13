  // Hamburger toggle
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav-links');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  // Typing effect for nav links
  const navLinks = document.querySelectorAll(".type-link");

  navLinks.forEach((link, i) => {
    const text = link.textContent;
    link.textContent = "";
    setTimeout(() => {
      typeText(link, text);
    }, i * 300);
  });

  function typeText(element, text, i = 0) {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      setTimeout(() => typeText(element, text, i + 1), 50);
    }
  }

  // Typing effect for dynamic hero word
  const words = ["a Developer", "an AI Enthusiast", "a Blogger", "a Problem Solver"];
  let wordIndex = 0;
  const dynamicSpan = document.getElementById("dynamic-word");

  function changeWord() {
    dynamicSpan.style.opacity = 0;
    setTimeout(() => {
      dynamicSpan.textContent = words[wordIndex];
      dynamicSpan.style.opacity = 1;
      wordIndex = (wordIndex + 1) % words.length;
    }, 500);
  }

  setInterval(changeWord, 3000);