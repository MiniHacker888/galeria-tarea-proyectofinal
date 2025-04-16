document.addEventListener("DOMContentLoaded", () => {
  const mainDisplay = document.getElementById("mainDisplay");
  const mainText = document.getElementById("mainText");
  const thumbs = document.querySelectorAll("#thumbContainer img");

  const originalText = mainText.textContent;

  thumbs.forEach(img => {
    const alt = img.alt;
    const src = img.src;

    // Asignar tabindex vía JavaScript (accesibilidad)
    img.setAttribute("tabindex", "0");

    const updateDisplay = () => {
      mainText.textContent = alt;
      mainDisplay.style.backgroundImage = `url(${src})`;
    };

    const resetDisplay = () => {
      mainText.textContent = originalText;
      mainDisplay.style.backgroundImage = "";
    };

    img.addEventListener("mouseenter", updateDisplay);
    img.addEventListener("focus", updateDisplay);
    img.addEventListener("mouseleave", resetDisplay);
    img.addEventListener("blur", resetDisplay);
  });
});
