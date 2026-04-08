function filtrar(tipo) {
  const cards = document.querySelectorAll("#galeria .col");
  cards.forEach(col => {
    const card = col.querySelector(".card");
    const tipoCard = card.getAttribute("data-tipo");

    if (tipo === "todas") {
      col.style.display = "block";
    } else if (tipo === "vocales") {
      if (tipoCard === "vocal") {
        col.style.display = "block";
      } else {
        col.style.display = "none";
      }
    }
  });
}

const cards = document.querySelectorAll('.flashcard'); 
const nextBtn = document.getElementById('nextBtn');
const flipSound = new Audio('src/sonidocards.mp3');
const contador = document.getElementById('contador');
let letrasVistas = 0;


cards.forEach((unaCarta) => {
    unaCarta.addEventListener('click', () => {
        flipSound.currentTime = 0; 
        flipSound.play().catch(error => {
            console.log("El navegador bloqueó el audio o el link falló:", error);
        });
        unaCarta.classList.toggle('flipped');

    
        if (unaCarta.classList.contains('flipped')) {
            letrasVistas = letrasVistas + 1;
        } else {
            letrasVistas = letrasVistas - 1;
        }

        contador.innerText = letrasVistas;
        
    });
});


