// Função para inicializar o carrossel em um card específico
function initializeCarousel(cardElement) {
    const carouselContainer = cardElement.querySelector('.carousel-container');
    if (!carouselContainer) return;

    const images = carouselContainer.querySelectorAll('.carousel-image');
    let currentIndex = 0;

    // Função para mostrar a imagem atual
    function showImage(index) {
        images.forEach((img, i) => {
            img.style.opacity = (i === index) ? '1' : '0';
        });
    }

    // Função para avançar para a próxima imagem
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    // Inicializa mostrando a primeira imagem
    showImage(currentIndex);

    // Configura o intervalo de 5 segundos (5000ms) para a troca automática
    setInterval(nextImage, 5000);
}

// Função principal para encontrar todos os cards e inicializar os carrosséis
function setupCarousels() {
    const productCards = document.querySelectorAll('.produto-card');
    productCards.forEach(card => {
        initializeCarousel(card);
    });
}

// Inicializa os carrosséis quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', setupCarousels);
