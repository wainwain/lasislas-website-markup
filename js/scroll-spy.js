document.addEventListener("DOMContentLoaded", function () {
  const sidebars = document.querySelectorAll(".lore-sidebar, .rules-sidebar");

  sidebars.forEach(sidebar => {
    const links = sidebar.querySelectorAll("a");
    const targetSections = Array.from(
      document.querySelectorAll(
        links.length && links[0].getAttribute("href").startsWith("#")
          ? links[0].getAttribute("href").includes("overview") // a clue it's Rules page
            ? ".rules-content section"
            : ".lore-article section"
          : "section"
      )
    );

    window.addEventListener("scroll", () => {
      const fromTop = window.scrollY + 150;

      targetSections.forEach((section, index) => {
        const id = section.getAttribute("id");
        const link = links[index];

        if (
          section.offsetTop <= fromTop &&
          section.offsetTop + section.offsetHeight > fromTop
        ) {
          links.forEach((l) => l.classList.remove("active"));
          link.classList.add("active");
        }
      });
    });

    links.forEach((link) => {
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
});
