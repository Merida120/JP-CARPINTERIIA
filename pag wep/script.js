// Agregar evento click al botón para mostrar el formulario de inicio de sesión
document.getElementById("login-btn").addEventListener("click", function() {
    document.body.classList.add("show-login-form");
  });
  
  // Agregar evento submit al formulario de inicio de sesión
  document.querySelector(".login-form form").addEventListener("submit", function(event) {
    event.preventDefault();
    // Verificar las credenciales de inicio de sesión aquí
    // Si las credenciales son correctas, redirigir a la página de destino
    window.location.href = "https://www.ejemplo.com/mi-pagina";
  });
  
  // Agregar evento click al botón cerrar del formulario de inicio de sesión
  document.querySelector(".login-form .close-btn").addEventListener("click", function() {
    document.body.classList.remove("show-login-form");
  });
  

