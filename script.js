const exploreButton = document.getElementById("exploreBtn");
const projectsSection = document.getElementById("projects");

exploreButton.addEventListener("click", () => {
  projectsSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Animasi masuk untuk project-item
  gsap.from(".project-item", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1.2,
    ease: "power3.out",
  });

  // Animasi Hover dengan efek 3D pada project-item
  document.querySelectorAll(".project-item").forEach((item) => {
    item.addEventListener("mousemove", (e) => {
      const { offsetX, offsetY } = e;
      const { clientWidth, clientHeight } = item;

      const xPos = (offsetX / clientWidth) * 100 - 50;
      const yPos = (offsetY / clientHeight) * 100 - 50;

      gsap.to(item, {
        rotationX: yPos * 0.3,
        rotationY: xPos * 0.3,
        scale: 1.05,
        ease: "power3.out",
        duration: 0.5,
      });
    });

    item.addEventListener("mouseleave", () => {
      gsap.to(item, {
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        ease: "power3.out",
        duration: 0.5,
      });
    });
  });

  // Animasi judul
  gsap.from(".title", {
    duration: 1.5,
    y: -50,
    opacity: 0,
    ease: "bounce.out",
  });

  // Perbaikan animasi skill agar skalanya seragam
  gsap.fromTo(
    ".skill",
    { scale: 0.5, opacity: 0 }, // Skala awal
    { scale: 1, opacity: 1, duration: 1.5, stagger: 0.2, ease: "power2.out" } // Skala akhir seragam
  );
});
