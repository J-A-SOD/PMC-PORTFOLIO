// LIGHT/DARK/HC THEMES

const themes = ["light", "dark", "high-contrast"];
const theme_icons = {
  "light": "LM",
  "dark": "DM",
  "high-contrast": "HC"
};

const button = document.getElementById("theme-toggle");

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  button.textContent = theme_icons[theme];
}

const saved = localStorage.getItem("theme") || "light";
applyTheme(saved);

button.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  const next = themes[(themes.indexOf(current) + 1) % themes.length];
  applyTheme(next);
});