const nav = document.querySelector('.navbar-toggler');

nav.addEventListener('click', function(e) {
    if(e.target.classList.contains('active')) {
        e.target.setAttribute('aria-expanded', 'true');
    }
    else {
        e.target.setAttribute('aria-expanded', 'false');
    }
});