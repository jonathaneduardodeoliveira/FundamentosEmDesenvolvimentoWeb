function validarFormulario() {
  var texto = document.getElementById("textInput").value;
  var validationMessage = document.getElementById("validationMessage");
  
  if (texto.trim() === "") {
    validationMessage.textContent = "Por favor, preencha o campo!";
    return false;
  } else {
    validationMessage.textContent = "Os guris do Grêmio acertaram, professor!";
    return true;
  }
}

var form = document.getElementById("simpleForm");

form.addEventListener("submit", function(event) {
  if (!validarFormulario()) {
    event.preventDefault();
  }
});
