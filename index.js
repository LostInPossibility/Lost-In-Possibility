// Smooth scrolling for navigation links
document.querySelectorAll(".nav-links a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
});

// Contact form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    console.log("Form submitted:", Object.fromEntries(formData));
    alert("Thank you for your message! We will get back to you soon.");
    this.reset();
  });

// Video playback management
const videos = document.querySelectorAll(".track video");
videos.forEach((video) => {
  video.addEventListener("play", function () {
    videos.forEach((otherVideo) => {
      if (otherVideo !== this) otherVideo.pause();
    });
  });
});
