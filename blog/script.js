const imageUrls = 'https://source.unsplash.com/random';

// Retorna array com os elementos com o <img>
const imageElements = document.querySelectorAll('img');

// Indice para modificar o elemento <img>
let i = 0;

function loadImage() {
  if (i >= imageElements.length) {
    return;
    // Encerrar a chamada da função quando finalizar todos os elementos
  }

  // Referenciar o elemento atual em imageElement
  const imageElement = imageElements[i];
  // const imageUrl = `https://source.unsplash.com/random?random=${(Math.random()*1000).toFixed(0)}`;

  // API do site unsplash para solicitar uma imagem aleatória com .

  const imageUrl = `https://source.unsplash.com/random?sig=${(Math.random() * 10000).toFixed(0)}`;

  console.log(imageUrl);// Mostrar 
  imageElement.src = imageUrl;
  // Ajustar o indice para o próximo <img>
  i++;

  // Chamar loadImage após 1s 
  setTimeout(loadImage, 1000);
}

loadImage();