const missionButton = document.getElementById("mission-btn");
const missionMessage = document.getElementById("mission-message");

if (missionButton) {
  missionButton.addEventListener("click", () => {
    missionMessage.textContent =
      "Mi misión es construir infraestructuras seguras, analizar evidencia digital y seguir aprendiendo continuamente sobre ciberseguridad.";
  });
}