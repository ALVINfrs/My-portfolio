document.addEventListener("DOMContentLoaded", () => {
  const carouselInner = document.querySelector(".carousel-inner");
  const prevButton = document.getElementById("prevBtn");
  const nextButton = document.getElementById("nextBtn");
  const carouselItems = document.querySelectorAll(".carousel-item");
  let currentIndex = 0;

  const updateCarousel = () => {
    const width = carouselItems[0].offsetWidth;
    carouselInner.style.transform = `translateX(-${currentIndex * width}px)`;
  };

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarousel();
  });

  prevButton.addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel();
  });

  window.addEventListener("resize", updateCarousel);

  const exploreButton = document.getElementById("exploreBtn");
  const projectsSection = document.getElementById("projects");

  exploreButton.addEventListener("click", () => {
    projectsSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
