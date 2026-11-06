
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  menuBtn.textContent = navMenu.classList.contains("active") ? "✕" : "☰";
});

document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuBtn.textContent = "☰";
  });
});

// إغلاق القائمة عند الضغط خارجها
document.addEventListener("click", (event) => {
  if (!navMenu.contains(event.target) && !menuBtn.contains(event.target)) {
    navMenu.classList.remove("active");
    menuBtn.textContent = "☰";
  }
});
