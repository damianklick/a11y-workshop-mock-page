const accordionSection = document.getElementById('faq');
const accordiontButtons = accordionSection.querySelectorAll('.accordion button');

accordiontButtons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        const id = e.target.getAttribute('aria-controls');
        document.getElementById(id).focus();
    })
})