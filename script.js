
        // Mobile menu toggle
        document.getElementById('menu-btn').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });
        
        // Letter box animation
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
        
        // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Hero section typing effect
        const heroText = document.querySelector('#home floating mb-12');
        const heroSubtext = document.querySelector('#home p');
        const originalText = heroText.innerHTML;
        const originalSubtext = heroSubtext.innerHTML;
        
        heroText.innerHTML = '';
        heroSubtext.innerHTML = '';
        
        let i = 0;
        const typing = setInterval(() => {
            if (i < originalText.length) {
                heroText.innerHTML += originalText.charAt(i);
                i++;
            } else if (i === originalText.length) {
                // Start typing subtext
                let j = 0;
                const subTyping = setInterval(() => {
                    if (j < originalSubtext.length) {
                        heroSubtext.innerHTML += originalSubtext.charAt(j);
                        j++;
                    } else {
                        clearInterval(subTyping);
                    }
                }, 50);
                i++; // Move past the text length
            }
        }, 100);
          // Create floating diamonds
        function createDiamonds() {
            const container = document.getElementById('diamonds-container');
            const count = 20;
            
            for (let i = 0; i < count; i++) {
                const diamond = document.createElement('div');
                diamond.classList.add('diamond');
                
                // Random position
                const left = Math.random() * 100;
                const size = 5 + Math.random() * 10;
                const opacity = 0.2 + Math.random() * 0.8;
                const duration = 15 + Math.random() * 30;
                const delay = Math.random() * 15;
                
                diamond.style.left = `${left}%`;
                diamond.style.width = `${size}px`;
                diamond.style.height = `${size}px`;
                diamond.style.opacity = opacity;
                diamond.style.animationDuration = `${duration}s`;
                diamond.style.animationDelay = `${delay}s`;
                diamond.style.top = '100vh';
                
                container.appendChild(diamond);
            }
        }
        
        // Create floating hearts
        function createHearts() {
            const container = document.getElementById('hearts-container');
            const count = 10;
            
            for (let i = 0; i < count; i++) {
                const heart = document.createElement('div');
                heart.classList.add('heart');
                
                // Random position
                const left = Math.random() * 100;
                const size = 10 + Math.random() * 20;
                const opacity = 0.3 + Math.random() * 0.7;
                const duration = 10 + Math.random() * 20;
                const delay = Math.random() * 10;
                
                heart.style.left = `${left}%`;
                heart.style.width = `${size}px`;
                heart.style.height = `${size}px`;
                heart.style.opacity = opacity;
                heart.style.animationDuration = `${duration}s`;
                heart.style.animationDelay = `${delay}s`;
                heart.style.top = '100vh';
                
                container.appendChild(heart);
            }
        }
        
        // Create sparkles on buttons
        function addSparkles() {
            const buttons = document.querySelectorAll('.btn-premium');
            
            buttons.forEach(button => {
                for (let i = 0; i < 4; i++) {
                    const sparkle = document.createElement('span');
                    sparkle.classList.add('sparkle');
                    sparkle.style.top = `${Math.random() * 100}%`;
                    sparkle.style.left = `${Math.random() * 100}%`;
                    sparkle.style.animationDelay = `${Math.random() * 2}s`;
                    button.appendChild(sparkle);
                }
            });
        }
        
        // Initialize animations
        document.addEventListener('DOMContentLoaded', () => {
            createDiamonds();
            createHearts();
            addSparkles();
            
            // Add parallax effect to background
            window.addEventListener('mousemove', (e) => {
                const x = e.clientX / window.innerWidth;
                const y = e.clientY / window.innerHeight;
                const bg = document.querySelector('.animated-bg');
                bg.style.transform = `scale(1.05) translate(${x * 20}px, ${y * 20}px)`;
                
                // Move color bubbles slightly with mouse
                const bubbles = document.querySelectorAll('.color-bubble');
                bubbles.forEach((bubble, index) => {
                    const speed = 0.02 + (index * 0.01);
                    bubble.style.transform = `translate(${x * 30 * speed}px, ${y * 30 * speed}px)`;
                });
            });
            
            // Continuous heart creation
            setInterval(createHearts, 3000);
        });