let indiceAtual = 0;

function moverCarrossel(direcao) {
  const carrossel = document.querySelector('.carrossel');
  const totalImagens = carrossel.children.length;

  // Atualiza o índice sem ultrapassar o limite
  indiceAtual = (indiceAtual + direcao + totalImagens) % totalImagens;

  // Move o carrossel
  carrossel.style.transform = `translateX(-${indiceAtual * 100}%)`;
}




