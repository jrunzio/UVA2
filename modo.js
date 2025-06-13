const body = document.body;
const btn = document.getElementById("toggle-modo");

function getModoGuardado() {
  return localStorage.getItem("modo") || "oscuro";
}

function setModo(modo) {
  if (modo === "oscuro") {
    body.classList.add("oscuro");
    body.classList.remove("claro");
    if (btn) btn.textContent = "☀️ Modo Claro";
  } else {
    body.classList.add("claro");
    body.classList.remove("oscuro");
    if (btn) btn.textContent = "🌙 Modo Oscuro";
  }
  localStorage.setItem("modo", modo);
}

document.addEventListener("DOMContentLoaded", function () {
  let modo = getModoGuardado();
  setModo(modo);
  if (btn) {
    btn.onclick = function () {
      modo = body.classList.contains("oscuro") ? "claro" : "oscuro";
      setModo(modo);
    };
  }
});
