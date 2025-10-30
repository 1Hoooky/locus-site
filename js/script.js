// Configuração do WhatsApp
// EDITE AQUI: Altere o número do WhatsApp (formato: código do país + DDD + número)
const WHATSAPP_NUMBER = '5544991128051';

// Menu Mobile Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Fechar menu ao clicar em um link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth Scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Função para abrir WhatsApp
function abrirWhatsApp() {
    const mensagem = 'Olá! Gostaria de solicitar um orçamento.';
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}

// Função para solicitar orçamento de produto específico
function solicitarOrcamento(produto) {
    const mensagem = `Olá! Gostaria de solicitar um orçamento para: ${produto}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}

// Função para enviar formulário via WhatsApp
function enviarFormulario(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;
    
    const mensagemWhatsApp = `Olá! Meu nome é ${nome}.\n\nEmail: ${email}\nTelefone: ${telefone}\n\nMensagem: ${mensagem}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagemWhatsApp)}`;
    
    window.open(url, '_blank');
    
    // Limpar formulário
    document.getElementById('contatoForm').reset();
}

// Animação de entrada dos elementos ao scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação aos cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.produto-card, .sobre-card, .depoimento-card, .info-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.style.boxShadow = 'none';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';
    }
    
    lastScroll = currentScroll;
});


// Carrossel de Depoimentos
document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.getElementById('depoimentosCarousel');
    if (carouselContainer) {
        const depoimentoCards = Array.from(carouselContainer.querySelectorAll('.depoimento-card'));
        const totalDepoimentos = depoimentoCards.length;
        const depoimentosPorSlide = 2;
        let currentIndex = 0;
        const intervalTime = 8000; // 8 segundos

        // Esconde todos os depoimentos
        depoimentoCards.forEach(card => {
            card.style.display = 'none';
        });

        // Função para mostrar o slide atual
        function showSlide() {
            // Esconde todos
            depoimentoCards.forEach(card => {
                card.style.display = 'none';
                // Remove a classe para a animação de entrada
                card.classList.remove('fade-in');
            });

            // Calcula o índice final do slide
            const endIndex = currentIndex + depoimentosPorSlide;

            for (let i = currentIndex; i < endIndex; i++) {
                // Usa o operador módulo para fazer o loop (circular)
                const realIndex = i % totalDepoimentos;
                const card = depoimentoCards[realIndex];
                
                // Exibe o card
                card.style.display = 'block';
                // Adiciona a classe para a animação de entrada (se você tiver uma no CSS)
                // Como não temos uma classe de animação no CSS, vamos simular com opacidade
                setTimeout(() => {
                    card.style.opacity = '0';
                    card.style.transition = 'opacity 1s ease-in-out';
                    card.style.opacity = '1';
                }, 10); // Pequeno delay para garantir que o display:block seja aplicado

                // O Intersection Observer no script.js já está aplicando uma animação,
                // mas vamos garantir que ele não interfira no carrossel, removendo a observação
                // para os cards que estão sendo controlados pelo carrossel.
                // No entanto, para simplificar e focar no carrossel, vamos apenas controlar o display.
                // O usuário pode notar a animação de scroll inicial, mas a troca será controlada aqui.
            }
            
            // Move para o próximo conjunto de depoimentos (2 em 2)
            currentIndex = (currentIndex + depoimentosPorSlide) % totalDepoimentos;
        }

        // Inicia o carrossel
        showSlide();
        setInterval(showSlide, intervalTime);
    }
});
