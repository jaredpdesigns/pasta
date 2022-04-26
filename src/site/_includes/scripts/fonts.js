window.onload = () => {
  document.getElementById("fontForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const url = document.getElementById("url").value;
    const urlRoot = url.replace("https://", "").split("/")[0];
    const existingLink = document.querySelectorAll(`link[href*="${urlRoot}"]`);
    if (existingLink.length) {
      existingLink.forEach((e) => e.parentNode.removeChild(e));
      const link = document.createElement("link");
      link.href = url;
      link.rel = "stylesheet";
      document.getElementsByTagName("head")[0].appendChild(link);
    } else {
      const link = document.createElement("link");
      link.href = url;
      link.rel = "stylesheet";
      document.getElementsByTagName("head")[0].appendChild(link);
    }
    const primaryFont = document.getElementById("primary").value;
    const secondaryFont = document.getElementById("secondary").value;
    const tertiaryFont = document.getElementById("tertiary").value;
    document.documentElement.style = `${
      primaryFont ? `--type__family--primary: ${primaryFont};` : ""
    }${secondaryFont ? `--type__family--secondary: ${secondaryFont};` : ""}${
      tertiaryFont ? `--type__family--tertiary: ${tertiaryFont};` : ""
    }`;
  });
}