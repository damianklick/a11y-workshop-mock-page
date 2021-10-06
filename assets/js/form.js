const emailValidation = /^(([0-9a-zA-Z])+([-._\'+&]))*[0-9a-zA-Z]+@([-0-9a-zA-Z]+[.])+[a-zA-Z]{2,6}$/;

const form = document.querySelector('.ud-contact-form');
const email = document.getElementById('email');
const submit = form.querySelector('.ud-main-btn');

function validateForm(field){
    let value = field.value;

    if(RegExp(emailValidation).test(value)) {
        field.classList.remove('error');
        return true;
    }
    else {
        field.classList.add('error');
        return false;
    }
}

submit.addEventListener('click', function(e) {
    e.preventDefault();
    const valid = validateForm(email);
    if(valid) {
        console.log('Success');
    }
    else {
    }
});

email.addEventListener('input', function(e) {
    if(e.target.classList.contains('error')) {
        validateForm(e.target);
    }
});

