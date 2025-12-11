document.addEventListener('DOMContentLoaded', () => {

    // Efeito de Digitação
    const textElement = document.getElementById('typing-text');
    const texts = ['Desenvolvedor Full Stack', 'Criador de Soluções', 'Entusiasta de Tecnologia'];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    (function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        textElement.textContent = letter;
        textElement.style.color = '#00f0ff';
        textElement.style.fontWeight = 'bold';

        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 2000); // Espera antes da próxima palavra
        } else {
            setTimeout(type, 100);
        }
    })();

    // Animações de Rolagem usando 
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up');
    animatedElements.forEach(el => observer.observe(el));

    // Efeito de Rolagem da Navbar
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Alternância do Menu Mobile 
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        // Alternância simples para demonstração
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = '#050505';
            navLinks.style.padding = '20px';
            navLinks.style.borderBottom = '1px solid #333';
        }
    });
});
