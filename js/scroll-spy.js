document.addEventListener("DOMContentLoaded", function () {
  const sidebarLinks = document.querySelectorAll(".lore-sidebar a");
  const sections = Array.from(document.querySelectorAll(".lore-article section"));

  // Scroll Spy Functionality
  window.addEventListener("scroll", () => {
    const fromTop = window.scrollY + 150;

    sections.forEach((section, index) => {
      const id = section.getAttribute("id");
      const link = sidebarLinks[index];

      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        sidebarLinks.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  });

  // Smooth Scroll on Click
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").slice(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
        top: targetSection.offsetTop - 80,
        behavior: "smooth",
      });
    });
  });
});
