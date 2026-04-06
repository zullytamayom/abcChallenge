let contador = 0;
let vistas = new Set();

function voltear(card) {
  card.classList.toggle("volteada");

  let letra = card.innerText;

  if (!vistas.has(letra)) {
    vistas.add(letra);
    contador++;
    document.getElementById("contador").textContent = contador;
  }
}

function filtrar(tipo) {
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    if (tipo === "todas") {
      card.style.display = "block";
    } else {
      if (card.dataset.tipo === "vocal") {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    }
  });
}