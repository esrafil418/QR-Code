const html = document.documentElement;

function toggleTheme() {
  if (html.getAttribute("data-theme") === "dark") {
    html.setAttribute("data-theme", "light");
  } else {
    html.setAttribute("data-theme", "dark");
  }
}

const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", toggleTheme);
