document.addEventListener("DOMContentLoaded", () => {
    const frases = [
        "Programador",
        "Gusto por la filosofía",
        "Me encantan los gatos",
        "Comediante de pepinos",
        "Tu cohete al éxito",
        "Hablame..."
    ];
    const elemento = document.getElementById("efecto-escribir");
    let fraseIndex = 0; // Índice de la frase actual
    let charIndex = 0; // Índice del carácter actual dentro de la frase

    function escribir() {
        if (charIndex < frases[fraseIndex].length) {
            elemento.textContent += frases[fraseIndex].charAt(charIndex); // Agrega un carácter
            charIndex++;
            setTimeout(escribir, 50); // Velocidad de escritura
        } else {
            // Espera antes de borrar
            setTimeout(borrar, 1000);
        }
    }

    function borrar() {
        if (charIndex > 0) {
            elemento.textContent = frases[fraseIndex].substring(0, charIndex - 1); // Borra un carácter
            charIndex--;
            setTimeout(borrar, 100); // Velocidad de borrado
        } else {
            // Pasa a la siguiente frase
            fraseIndex = (fraseIndex + 1) % frases.length; // Cicla entre las frases
            setTimeout(escribir, 500);
        }
    }

    escribir(); // Inicia el efecto
});

document.addEventListener("DOMContentLoaded", () => {
    function crearPepino() {
      // Crear un nuevo elemento div con la clase "pepino"
      const pepino = document.createElement("div");
      pepino.classList.add("pepino");
  
      // Establecer una posición inicial aleatoria en el eje X
      const posicionX = Math.random() * window.innerWidth;
      pepino.style.left = `${posicionX}px`;
      pepino.style.top = `0px`;
  
      // Agregar el pepino al body
      document.body.appendChild(pepino);
  
      // Animar el pepino para que caiga
      let posicionY = 0;
      const velocidad = 3; // Velocidad de caída
  
      function moverPepino() {
        posicionY += velocidad;
        pepino.style.top = `${posicionY}px`;
  
        // Si el pepino sale de la pantalla, eliminarlo
        if (posicionY > window.innerHeight) {
          pepino.remove();
        } else {
          requestAnimationFrame(moverPepino);
        }
      }
  
      moverPepino();
    }
  
    // Generar un pepino nuevo cada cierto tiempo
    setInterval(crearPepino, 1000); // Cambia el intervalo según lo desees
  });
  
  