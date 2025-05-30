document.addEventListener('DOMContentLoaded', function() {  
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                document.querySelectorAll('nav ul li a').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('nav ul li a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
    
    const glitchElements = document.querySelectorAll('.glitch');
    glitchElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.animation = 'glitch-effect 0.5s infinite';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.animation = '';
        });
    });
    
    const codeBg = document.querySelector('.code-bg');
    if (codeBg) {
        const characters = '01';
        const columns = Math.floor(window.innerWidth / 20);
        const rows = Math.floor(window.innerHeight / 20);
        
        for (let i = 0; i < 100; i++) {
            const codeElement = document.createElement('div');
            codeElement.className = 'code-character';
            codeElement.textContent = characters.charAt(Math.floor(Math.random() * characters.length));
            codeElement.style.left = `${Math.random() * 100}%`;
            codeElement.style.top = `${Math.random() * 100}%`;
            codeElement.style.animationDelay = `${Math.random() * 5}s`;
            codeElement.style.opacity = Math.random() * 0.5 + 0.1;
            codeBg.appendChild(codeElement);
        }
    }
});
