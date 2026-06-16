// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add to cart interactive buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const originalText = this.innerText;
        this.innerText = 'Added to Cart ✓';
        this.style.backgroundColor = '#00d2d3';
        this.style.color = '#222f3e';
        
        setTimeout(() => {
            this.innerText = originalText;
            this.style.backgroundColor = ''; 
            this.style.color = '';
        }, 2000);
    });
});

