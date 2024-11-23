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
    let fraseIndex = 0;
    let charIndex = 0;

    function escribir() {
        if (charIndex < frases[fraseIndex].length) {
            elemento.textContent += frases[fraseIndex].charAt(charIndex);
            charIndex++;
            setTimeout(escribir, 50);
        } else {
            setTimeout(borrar, 1000);
        }
    }

    function borrar() {
        if (charIndex > 0) {
            elemento.textContent = frases[fraseIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(borrar, 100);
        } else {
            fraseIndex = (fraseIndex + 1) % frases.length;
            setTimeout(escribir, 500);
        }
    }

    escribir();

    const header = document.querySelector("header");
    const tronarSonido = new Audio("Tronar.mp3"); 

    function crearPepino() {
        const pepino = document.createElement("div");
        pepino.classList.add("pepino");

        const headerAncho = header.offsetWidth;
        const headerAlto = header.offsetHeight;
        const posicionX = Math.random() * headerAncho;

        pepino.style.left = `${posicionX}px`;
        pepino.style.top = `0px`;

        header.appendChild(pepino);

        let posicionY = 0;
        const velocidad = 3.4;

        function moverPepino() {
            posicionY += velocidad;
            pepino.style.top = `${posicionY}px`;

            if (posicionY > headerAlto) {
                pepino.remove();
            } else {
                requestAnimationFrame(moverPepino);
            }
        }

        pepino.addEventListener("click", () => {
            
            tronarSonido.currentTime = 0;
            tronarSonido.play();

            
            pepino.style.transition = "transform 0.3s ease, opacity 0.3s ease";
            pepino.style.transform = "scale(0)";
            pepino.style.opacity = "0";

            setTimeout(() => {
                pepino.remove();
            }, 300);
        });

        moverPepino();
    }

    setInterval(crearPepino, 850);

    const images = document.querySelectorAll("#galeria img");
    const hoverSound = document.getElementById("hover-sound");

    images.forEach((image) => {
        image.addEventListener("mouseenter", () => {
            hoverSound.pause();
            hoverSound.currentTime = 0;
            hoverSound.play();
        });
    });
});
