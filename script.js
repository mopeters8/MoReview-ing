const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
});

// showcase.addEventListener("click", () => {
//   if (menuToggle.classList.contains("active")) {
//     menuToggle.classList.toggle("active");
//     showcase.classList.toggle("active");
//   }
// });
