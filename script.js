const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

// Open and close the mobile navigation menu.
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the menu after a visitor chooses a navigation link.
mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Automatically show the current year in the footer.
document.getElementById("year").textContent = new Date().getFullYear();
