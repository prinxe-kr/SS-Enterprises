// Add interactive effects when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Create additional dynamic sparks
    createDynamicSparks();
    
    // Add hover effects to logo
    addLogoHoverEffect();
    
    // Add typing effect to tagline
    addTypingEffect();
    
    // Add parallax effect on mouse move
    addParallaxEffect();
});

// Create dynamic sparks that appear randomly
function createDynamicSparks() {
    const sparksContainer = document.querySelector('.sparks');
    
    setInterval(() => {
        const spark = document.createElement('div');
        spark.className = 'spark dynamic-spark';
        spark.style.left = Math.random() * 100 + '%';
        spark.style.top = Math.random() * 100 + '%';
        spark.style.animationDelay = Math.random() * 2 + 's';
        
        sparksContainer.appendChild(spark);
        
        // Remove spark after animation
        setTimeout(() => {
            spark.remove();
        }, 2000);
    }, 800);
}

// Add hover effect to logo
function addLogoHoverEffect() {
    const logo = document.querySelector('.logo');
    
    logo.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) rotate(5deg)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    logo.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
}

// Add typing effect to tagline
function addTypingEffect() {
    const tagline = document.querySelector('.tagline');
    const originalText = tagline.textContent;
    tagline.textContent = '';
    
    let index = 0;
    const typeInterval = setInterval(() => {
        if (index < originalText.length) {
            tagline.textContent += originalText[index];
            index++;
        } else {
            clearInterval(typeInterval);
        }
    }, 100);
}

// Add parallax effect on mouse move
function addParallaxEffect() {
    const container = document.querySelector('.container');
    const content = document.querySelector('.content');
    
    container.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;
        
        const moveX = mouseX * 20;
        const moveY = mouseY * 20;
        
        content.style.transform = `translate(${moveX}px, ${moveY}px)`;
        content.style.transition = 'transform 0.1s ease-out';
    });
    
    container.addEventListener('mouseleave', function() {
        content.style.transform = 'translate(0, 0)';
    });
}

// Add click effect to Coming Soon banner
document.addEventListener('DOMContentLoaded', function() {
    const banner = document.querySelector('.banner-text');
    
    banner.addEventListener('click', function() {
        this.style.animation = 'bannerPulse 0.5s ease';
        setTimeout(() => {
            this.style.animation = '';
        }, 500);
    });
});

// Add CSS animation for banner pulse
const style = document.createElement('style');
style.textContent = `
    @keyframes bannerPulse {
        0% { transform: perspective(500px) rotateX(10deg) scale(1); }
        50% { transform: perspective(500px) rotateX(10deg) scale(1.05); }
        100% { transform: perspective(500px) rotateX(10deg) scale(1); }
    }
    
    .dynamic-spark {
        animation: sparkAnimation 2s ease-out forwards;
    }
`;
document.head.appendChild(style);
