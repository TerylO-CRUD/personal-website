const toggle = document.querySelector("#theme-toggle");
 
function setDark(on) {
  document.body.classList.toggle("dark", on);
  toggle.textContent = on ? "Light mode" : "Dark mode";
  try {
    localStorage.setItem("dark", on);
  } catch (e) {}
}
 
try {
  setDark(localStorage.getItem("dark") === "true");
} catch (e) {}
 
toggle.addEventListener("click", () => setDark(!document.body.classList.contains("dark")));
 
const cards = document.querySelectorAll(".project");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
});
 
cards.forEach((card) => {
  card.classList.add("reveal");
  observer.observe(card);
});