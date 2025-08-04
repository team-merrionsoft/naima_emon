
        // Create additional floating elements dynamically
        document.addEventListener('DOMContentLoaded', function() {
            const heroBg = document.querySelector('.hero-bg');
            
            // Function to create elements
            function createFloatingElement(tag, className, count, styles = {}) {
                for (let i = 0; i < count; i++) {
                    const element = document.createElement(tag);
                    element.classList.add(className, `animate-${className.split('-')[0]}-float`);
                    element.style.left = `${Math.random() * 100}%`;
                    element.style.top = `${Math.random() * 100}%`;
                    element.style.animationDelay = `${Math.random() * 5000}ms`;
                    
                    // Apply additional styles
                    Object.keys(styles).forEach(key => {
                        element.style[key] = styles[key];
                    });
                    
                    heroBg.appendChild(element);
                }
            }
            
            // Create elements based on screen size
            const isMobile = window.innerWidth <= 768;
            const isSmallMobile = window.innerWidth <= 480;
            
            // Create bubbles
            const bubbleCount = isSmallMobile ? 8 : isMobile ? 12 : 15;
            for (let i = 0; i < bubbleCount; i++) {
                const bubble = document.createElement('div');
                bubble.classList.add('bubble', 'animate-bubble-float');
                bubble.style.width = `${Math.random() * (isSmallMobile ? 20 : 40) + 10}px`;
                bubble.style.height = bubble.style.width;
                bubble.style.left = `${Math.random() * 100}%`;
                bubble.style.top = `${Math.random() * 100}%`;
                bubble.style.animationDelay = `${Math.random() * 5000}ms`;
                heroBg.appendChild(bubble);
            }
            
            // Create diamonds
            const diamondCount = isSmallMobile ? 5 : isMobile ? 8 : 10;
            for (let i = 0; i < diamondCount; i++) {
                const diamond = document.createElement('div');
                diamond.classList.add('diamond', 'animate-diamond-float');
                diamond.style.left = `${Math.random() * 100}%`;
                diamond.style.top = `${Math.random() * 100}%`;
                diamond.style.animationDelay = `${Math.random() * 5000}ms`;
                heroBg.appendChild(diamond);
            }
            
            // Create hearts
            const hearts = ['💖', '💕', '💗', '💓', '💞', '💝'];
            const heartCount = isSmallMobile ? 4 : isMobile ? 6 : 8;
            for (let i = 0; i < heartCount; i++) {
                const heart = document.createElement('div');
                heart.classList.add('heart', 'animate-heart-float');
                heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
                heart.style.left = `${Math.random() * 100}%`;
                heart.style.top = `${Math.random() * 100}%`;
                heart.style.animationDelay = `${Math.random() * 5000}ms`;
                heroBg.appendChild(heart);
            }
            
            // Create butterflies
            const butterflyCount = isSmallMobile ? 3 : isMobile ? 4 : 5;
            for (let i = 0; i < butterflyCount; i++) {
                const butterfly = document.createElement('div');
                butterfly.classList.add('butterfly', 'animate-butterfly-float');
                butterfly.textContent = '🦋';
                butterfly.style.left = `${Math.random() * 100}%`;
                butterfly.style.top = `${Math.random() * 100}%`;
                butterfly.style.animationDelay = `${Math.random() * 5000}ms`;
                butterfly.style.fontSize = `${Math.random() * (isSmallMobile ? 10 : 20) + (isSmallMobile ? 15 : 20)}px`;
                heroBg.appendChild(butterfly);
            }
            
            // Create flower petals
            const petalCount = isSmallMobile ? 6 : isMobile ? 9 : 12;
            for (let i = 0; i < petalCount; i++) {
                const petal = document.createElement('div');
                petal.classList.add('petal', 'animate-petal-float');
                petal.style.left = `${Math.random() * 100}%`;
                petal.style.top = `${Math.random() * 100}%`;
                petal.style.animationDelay = `${Math.random() * 5000}ms`;
                petal.style.width = `${Math.random() * (isSmallMobile ? 8 : 15) + (isSmallMobile ? 7 : 10)}px`;
                petal.style.height = petal.style.width;
                heroBg.appendChild(petal);
            }
            
            // Add sparkles to buttons
            const buttons = document.querySelectorAll('.glass-button');
            buttons.forEach(button => {
                // Clear existing sparkles
                const existingSparkles = button.querySelectorAll('.sparkle');
                existingSparkles.forEach(sparkle => sparkle.remove());
                
                // Add new sparkles
                const sparkleCount = isSmallMobile ? 4 : 8;
                for (let i = 0; i < sparkleCount; i++) {
                    const sparkle = document.createElement('div');
                    sparkle.classList.add('sparkle');
                    sparkle.style.left = `${Math.random() * 100}%`;
                    sparkle.style.top = `${Math.random() * 100}%`;
                    sparkle.style.animationDelay = `${Math.random() * 2000}ms`;
                    sparkle.style.width = `${Math.random() * 4 + 4}px`;
                    sparkle.style.height = sparkle.style.width;
                    button.appendChild(sparkle);
                }
            });
        });
        
        // Handle window resize
        window.addEventListener('resize', function() {
            clearTimeout(window.resizeTimeout);
            window.resizeTimeout = setTimeout(function() {
                // Reinitialize floating elements on resize
                document.addEventListener('DOMContentLoaded', arguments.callee);
            }, 250);
        });

        function openLetter() {
            const letterBox = document.querySelector('.letter-box');
            letterBox.classList.add('opened');
        }
        
        function closeLetter(event) {
            event.stopPropagation();
            const letterBox = document.querySelector('.letter-box');
            letterBox.classList.remove('opened');
        }
        
        // Add floating elements to all sections
        document.addEventListener('DOMContentLoaded', function() {
            const sections = document.querySelectorAll('section');
            sections.forEach((section, sectionIndex) => {
                const sectionBg = section.querySelector('.hero-bg') || section;
                
                // Create unique floating elements for each section
                const createElements = (type, count, className, emoji) => {
                    for (let i = 0; i < count; i++) {
                        const element = document.createElement('div');
                        element.className = className;
                        if (emoji) element.textContent = emoji;
                        element.style.left = `${Math.random() * 100}%`;
                        element.style.top = `${Math.random() * 100}%`;
                        element.style.animationDelay = `${Math.random() * 5000}ms`;
                        section.appendChild(element);
                    }
                };
                
                // Different elements for different sections
                if (sectionIndex === 0) {
                    createElements('bubble', 20, 'bubble animate-bubble-float');
                    createElements('heart', 10, 'heart animate-heart-float', '💖');
                } else if (sectionIndex === 1) {
                    createElements('diamond', 15, 'diamond animate-diamond-float');
                    createElements('butterfly', 8, 'butterfly animate-butterfly-float', '🦋');
                } else if (sectionIndex === 2) {
                    createElements('petal', 12, 'petal animate-petal-float');
                    createElements('heart', 6, 'heart animate-heart-float', '💕');
                } else if (sectionIndex === 3) {
                    createElements('bubble', 15, 'bubble animate-bubble-float');
                    createElements('heart', 8, 'heart animate-heart-float', '💌');
                }
            });
        });

        document.getElementById('letter-box').addEventListener('click', function() {
            this.classList.toggle('flipped');
            
            // Show letter content after flip animation completes
            setTimeout(() => {
                if (this.classList.contains('flipped')) {
                    document.getElementById('letter-content').classList.add('show');
                } else {
                    document.getElementById('letter-content').classList.remove('show');
                }
            }, 400);
        });
        
    
