document.addEventListener('DOMContentLoaded', function() {
    // Tornar os ícones clicáveis
    var toggleIcons = document.querySelectorAll('.input-field ion-icon[id^="toggle"]');
    toggleIcons.forEach(function(icon) {
      icon.style.pointerEvents = 'auto';
      icon.style.cursor = 'pointer';
    });
  });

  function togglePassword(inputId, iconId) {
    var passwordInput = document.getElementById(inputId);
    var icon = document.getElementById(iconId);
    
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      icon.setAttribute("name", "lock-open-outline"); // Mudar para cadeado aberto
    } else {
      passwordInput.type = "password";
      icon.setAttribute("name", "lock-closed-outline"); // Mudar para cadeado fechado
    }
  }