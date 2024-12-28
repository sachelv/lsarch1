// main.ts

// A quick “slideshow” example for hero images.
const heroImages: HTMLImageElement[] = Array.from(document.querySelectorAll(".hero-img"));
let currentSlide = 0;

const showSlide = (n: number) => {
  heroImages.forEach((img, i) => {
    img.classList.remove("active");
    if (i === n) {
      img.classList.add("active");
    }
  });
};

const nextSlideBtn = document.getElementById("nextSlide");
const prevSlideBtn = document.getElementById("prevSlide");

if (nextSlideBtn && prevSlideBtn) {
  nextSlideBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % heroImages.length;
    showSlide(currentSlide);
  });

  prevSlideBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + heroImages.length) % heroImages.length;
    showSlide(currentSlide);
  });
}

// Initialize first slide
showSlide(currentSlide);

// Contact / Career tab toggling
const contactBtn = document.getElementById("contactBtn") as HTMLButtonElement | null;
const careerBtn = document.getElementById("careerBtn") as HTMLButtonElement | null;
const contactContent = document.getElementById("contactContent");
const careerContent = document.getElementById("careerContent");

if (contactBtn && careerBtn && contactContent && careerContent) {
  contactBtn.addEventListener("click", () => {
    contactBtn.classList.add("active");
    careerBtn.classList.remove("active");
    contactContent.style.display = "block";
    careerContent.style.display = "none";
  });

  careerBtn.addEventListener("click", () => {
    careerBtn.classList.add("active");
    contactBtn.classList.remove("active");
    careerContent.style.display = "block";
    contactContent.style.display = "none";
  });
}
