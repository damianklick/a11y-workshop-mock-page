const emailValidation = /^(([0-9a-zA-Z])+([-._\'+&]))*[0-9a-zA-Z]+@([-0-9a-zA-Z]+[.])+[a-zA-Z]{2,6}$/;

const form = document.querySelector('.ud-contact-form');
const email = document.getElementById('email');
const submit = form.querySelector('.ud-main-btn');
const success = form.querySelector('.successMsg');

function validateForm(field){
    let value = field.value;

    if(RegExp(emailValidation).test(value)) {
        field.classList.remove('error');
        field.removeAttribute('aria-labelledby');
        field.setAttribute('aria-invalid', 'false');
        return true;
    }
    else {
        field.classList.add('error');
        field.setAttribute('aria-labelledby', 'phoneError');
        field.setAttribute('aria-invalid', 'true');
        return false;
    }
}

submit.addEventListener('click', function(e) {
    e.preventDefault();
    const valid = validateForm(email);
    if(valid) {
        success.removeAttribute('hidden');
        form.reset();
        success.focus();
    }
    else {
        email.focus();
    }
});

email.addEventListener('input', function(e) {

    if(e.target.value !== '') {
        submit.setAttribute('aria-disabled', 'false');
    }
    else {
        submit.setAttribute('aria-disabled', 'true');
    }

    if(e.target.classList.contains('error')) {
        validateForm(e.target);
    }
});

