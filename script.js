document.addEventListener("DOMContentLoaded", () => {

  const hero = document.querySelector(".hero");
  const heroImage = document.querySelector(".hero-image");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    heroImage.style.transform = `scale(1.05) translateY(${scrollY * 0.08}px)`;
  });

  const buttons = document.querySelectorAll(
    ".primary-btn, .secondary-btn, .cta"
  );

  buttons.forEach((button) => {

    button.addEventListener("mouseenter", () => {
      button.style.transform = "translateY(-2px)";
    });

    button.addEventListener("mouseleave", () => {
      button.style.transform = "translateY(0px)";
    });

  });

});