// Validación del formulario
document.getElementById("contactoForm").addEventListener("submit", function (event) {
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensajeError = document.getElementById("mensajeError");

  if (nombre === "" || email === "") {
    mensajeError.textContent = "Por favor, completa todos los campos.";
    event.preventDefault();
  } else {
    mensajeError.textContent = "";
  }
});

// Juego de adivinar número
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

function adivinarNumero() {
  const intento = parseInt(document.getElementById("entradaNumero").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(intento)) {
    resultado.textContent = "Introduce un número válido.";
  } else if (intento < numeroSecreto) {
    resultado.textContent = "Demasiado bajo.";
  } else if (intento > numeroSecreto) {
    resultado.textContent = "Demasiado alto.";
  } else {
    resultado.textContent = "¡Correcto! Has adivinado el número.";
  }
}
