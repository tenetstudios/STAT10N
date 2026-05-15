document.addEventListener("DOMContentLoaded", () => {

  const heroImage = document.querySelector(".hero-image");

  /* DESKTOP PARALLAX */

  if (heroImage && window.innerWidth > 900) {

    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;

      heroImage.style.transform =
        `scale(1.02) translateY(${scrollY * 0.08}px)`;
    });

  }

  /* BUTTON HOVER */

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

  /* MOBILE MENU */

  const menuToggle = document.querySelector(".mobile-menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (menuToggle && mobileMenu) {

    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");
    });

    const mobileLinks = mobileMenu.querySelectorAll("a");

    mobileLinks.forEach((link) => {

      link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
      });

    });

  }

});