function getTheme() {
  if (sessionStorage.getItem("theme") === null) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      sessionStorage.setItem("theme", "dark");
    } else {
      sessionStorage.setItem("theme", "light");
    }
  }
  document.documentElement.setAttribute(
    "data-theme",
    sessionStorage.getItem("theme")
  );
}

function setTheme() {
  if (document.documentElement.getAttribute("data-theme") === "dark") {
    sessionStorage.setItem("theme", "light");
  } else {
    sessionStorage.setItem("theme", "dark");
  }
  document.documentElement.setAttribute(
    "data-theme",
    sessionStorage.getItem("theme")
  );
}

window.onload = () => {
  getTheme();
  document.documentElement.classList.add("loaded");
};
