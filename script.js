document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you for reaching out! I'll get back to you soon.")
});

window.addEventListener('scroll', function() {
    const backToTop = document.querySelector('.back-to-top');
    if(this.window.pageYoffset > 300) {
        backToTop.classList.remove('visible');
    }
});