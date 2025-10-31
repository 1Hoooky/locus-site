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
	        const hash = this.getAttribute('href');
	
	        if (target) {
	            const headerOffset = 80;
	            const elementPosition = target.getBoundingClientRect().top;
	            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
	
	            window.scrollTo({
	                top: offsetPosition,
	                behavior: 'smooth'
	            });
	
	            // Remove o hash da URL após a rolagem suave
	            if (history.pushState) {
	                history.pushState(null, null, window.location.pathname + window.location.search);
	            } else {
	                window.location.hash = '';
	            }
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

        // Função para mostrar o slide atual com fade-in
        function showSlide() {
            const nextIndex = (currentIndex + depoimentosPorSlide) % totalDepoimentos;
            const currentIndices = [];
            const nextIndices = [];

            // Identifica os índices atuais e próximos
            for (let i = 0; i < depoimentosPorSlide; i++) {
                currentIndices.push((currentIndex + i) % totalDepoimentos);
                nextIndices.push((nextIndex + i) % totalDepoimentos);
            }

            // 1. Aplica fade-out nos depoimentos atuais
            currentIndices.forEach(index => {
                const card = depoimentoCards[index];
                card.classList.remove('fade-in');
                card.classList.add('fade-out');
            });

            // 2. Após o tempo de transição (1s no CSS), troca o conteúdo e aplica fade-in
            // O tempo de espera deve ser igual ao tempo de transição (1000ms)
            setTimeout(() => {
                // Esconde todos e remove a classe fade-out
                depoimentoCards.forEach(card => {
                    card.style.display = 'none';
                    card.classList.remove('fade-out');
                });

                // Exibe e aplica fade-in nos próximos depoimentos
                nextIndices.forEach(index => {
                    const card = depoimentoCards[index];
                    card.style.display = 'block';
                    // Pequeno delay para garantir que o display:block seja aplicado antes do fade-in
                    setTimeout(() => {
                        card.classList.add('fade-in');
                    }, 10);
                });

                // Atualiza o índice para o próximo slide
                currentIndex = nextIndex;
            }, 1000); // 1000ms = 1 segundo (tempo da transição CSS)
        }

        // 3. Inicializa o primeiro slide
        // Esconde todos primeiro
        depoimentoCards.forEach(card => card.style.display = 'none');
        
        // Exibe os dois primeiros
        for (let i = 0; i < depoimentosPorSlide; i++) {
            const card = depoimentoCards[i];
            card.style.display = 'block';
            card.classList.add('fade-in');
        }
        
        // Move o índice inicial para o próximo slide
        currentIndex = depoimentosPorSlide % totalDepoimentos;

        // Inicia a troca automática
        // O intervalo deve ser o tempo total (8000ms)
        setInterval(showSlide, intervalTime);
    }
});