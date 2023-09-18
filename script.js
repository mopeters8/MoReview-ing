const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");
const beginningText = document.querySelector(".beginningsText");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
  beginningText.classList.toggle("active");
});

// document.addEventListener("click", (e) => {
//   if (menuToggle.classList.contains("active")) {
//     menuToggle.classList.remove("active");
//     showcase.classList.remove("active");
//   } else if (!menuToggle.classList.contains("active")) {
//     menuToggle.classList.toggle("active");
//     // showcase.classList.toggle("active");
//   }
// });

// showcase.addEventListener("click", () => {
//   if (menuToggle.classList.contains("active")) {
//     menuToggle.classList.toggle("active");
//     showcase.classList.toggle("active");
//   }
// });
