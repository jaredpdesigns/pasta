function updateCode() {
  let code = document
    .getElementsByTagName("pre")[0]
    .getElementsByClassName("attr-value")[0];
  code.replaceChild(
    document.createTextNode(document.getElementById("buttonExample").classList),
    code.childNodes[2]
  );
}

function updateButtonVariant(select) {
  const btn = document.getElementById("buttonExample");
  btn.className = `button__${select.value}`;
  if (select.value === "tertiary") {
    const micro = document.getElementById("micro");
    micro.checked = false;
    micro.setAttribute("disabled", true);
  } else {
    micro.removeAttribute("disabled");
  }
  updateCode(select.value);
}

function updateButtonSize(checkbox) {
  const btn = document.getElementById("buttonExample");
  if (checkbox.checked) {
    btn.classList.add("button__micro");
    updateCode("micro");
  } else {
    btn.classList.remove("button__micro");
    updateCode("");
  }
}
