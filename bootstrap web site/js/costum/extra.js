window.addEventListener('DOMContentLoaded', event => {
    var navbarMobile = function() {
        const nCollapsible = document.body.querySelector('#main-navbar');
        if (!nCollapsible) {
            return
        }
        if (window.scrollY === 0) {
            nCollapsible.classList.remove('navbar-mobile');
        }
        else {
            nCollapsible.classList.add('navbar-mobile');
        }
    };
    navbarMobile();
    document.addEventListener('scroll', navbarMobile);
    const myNavbar = document.body.querySelector('#main-navbar');
    if (myNavbar) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#main-navbar',
            offset: 74
        });
    }
});
var btnCanvas = document.querySelectorAll('.btn-close-canvas');
for (let i = 0; i < btnCanvas.length; i++) {
    btnCanvas[i].addEventListener('click', function () {
        document.querySelector('[data-bs-dismiss="offcanvas"]').click();
    });
};
(function () {
    'use strict';
    var myName = document.querySelector('#name');
    var myEmail = document.querySelector('#email');
    var myPhone = document.querySelector('#phone');
    var myMessage = document.querySelector('#message');
    var myButton = document.querySelector('#btn-contact');

    if (myMessage.value.length == 0) {
        myButton.disabled = true;
    }
    const spacePattern = /^\S*$/;
    const numericPattern = /^([^0-9]*)$/;
    const emailPattern = /^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/;
    const onlyNumberPattern = /^[0-9]*$/
    myName.addEventListener('blur', controlName);
    myEmail.addEventListener('blur', controlEmail);
    myPhone.addEventListener('blur', controlPhone);
    myMessage.addEventListener('blur', controlMessage);

    function controlName() {
        var myError = document.querySelector('#err-name');
        if (myName.value.length == 0) {
            myName.classList.remove('is-valid');
            myName.classList.add('is-invalid');
            myError.innerHTML = 'Name field cannot be left blank!';
            return false;
        }
        else if (myName.value.length <= 3) {
            myName.classList.remove('is-valid');
            myName.classList.add('is-invalid');
            myError.innerHTML = 'The name cannot be less than 3 characters!';
            return false;
        }
        else if (myName.value.length > 40) {
            myName.classList.remove('is-valid');
            myName.classList.add('is-invalid');
            myError.innerHTML = 'The name cannot exceed 40 characters!';
            return false;
        }
        else if (!spacePattern.test(myName.value)) {
            myName.classList.remove('is-valid');
            myName.classList.add('is-invalid');
            myError.innerHTML = 'There can be no spaces in the name!';
            return false;
        }
        else if (!numericPattern.test(myName.value)) {
            myName.classList.remove('is-valid');
            myName.classList.add('is-invalid');
            myError.innerHTML = "There can't be a number in the name!";
            return false;
        }
        else {
            myName.classList.remove('is-invalid');
            myName.classList.add('is-valid');
            return true;
        }
    }
    function controlEmail() {
        var myError = document.querySelector('#err-email');
        if (myEmail.value.length == 0) {
            myEmail.classList.remove('is-valid');
            myEmail.classList.add('is-invalid');
            myError.innerHTML = 'Email field cannot be left blank!';
            return false;
        }
        else if (!spacePattern.test(myEmail.value)) {
            myEmail.classList.remove('is-valid');
            myEmail.classList.add('is-invalid');
            myError.innerHTML = 'There can be no spaces in the Email!';
            return false;
        }
        else if (!emailPattern.test(myEmail.value)) {
            myEmail.classList.remove('is-valid');
            myEmail.classList.add('is-invalid');
            myError.innerHTML = 'This is not an Email address!';
            return false;
        }
        else if (myEmail.value.length <= 10) {
            myEmail.classList.remove('is-valid');
            myEmail.classList.add('is-invalid');
            myError.innerHTML = 'The Email cannot be less than 10 characters!';
            return false;
        }
        else if (myEmail.value.length > 35) {
            myEmail.classList.remove('is-valid');
            myEmail.classList.add('is-invalid');
            myError.innerHTML = 'The Email cannot exceed 35 characters!';
            return false;
        }
        else {
            myEmail.classList.remove('is-invalid');
            myEmail.classList.add('is-valid');
            return true;
        }
    }
    function controlPhone() {
        var myError = document.querySelector('#err-phone');
        if (myPhone.value.length == 0) {
            myPhone.classList.remove('is-valid');
            myPhone.classList.add('is-invalid');
            myError.innerHTML = 'Phone field cannot be left blank!';
            return false;
        }
        else if (!spacePattern.test(myPhone.value)) {
            myPhone.classList.remove('is-valid');
            myPhone.classList.add('is-invalid');
            myError.innerHTML = 'There can be no spaces in the Phone number!';
            return false;
        }
        else if (!onlyNumberPattern.test(myPhone.value)) {
            myPhone.classList.remove('is-valid');
            myPhone.classList.add('is-invalid');
            myError.innerHTML = 'You can only enter numbers.!';
            return false;
        }
        else if (myPhone.value.length < 7) {
            myPhone.classList.remove('is-valid');
            myPhone.classList.add('is-invalid');
            myError.innerHTML = 'The Phone number cannot be less than 7 characters!';
            return false;
        }
        else if (myPhone.value.length > 11) {
            myPhone.classList.remove('is-valid');
            myPhone.classList.add('is-invalid');
            myError.innerHTML = 'The Phone number cannot exceed 11 characters!';
            return false;
        }
        else {
            myPhone.classList.remove('is-invalid');
            myPhone.classList.add('is-valid');
            return true;
        }
    }
    function controlMessage() {
        var myError = document.querySelector('#err-message');
        if (myMessage.value.length == 0) {
            myMessage.classList.remove('is-valid');
            myMessage.classList.add('is-invalid');
            myError.innerHTML = 'Message field cannot be left blank!';
            return false;
        }
        else if (myMessage.value.length < 5) {
            myMessage.classList.remove('is-valid');
            myMessage.classList.add('is-invalid');
            myError.innerHTML = 'Your Message cannot be less than 5 characters!';
            return false;
        }
        else {
            myMessage.classList.remove('is-invalid');
            myMessage.classList.add('is-valid');
            return true;
        }
    }

    myMessage.addEventListener('keyup', function () {
        document.getElementById('current-character').textContent = myMessage.value.length;
        if (myMessage.value.length >= 4) {
            myButton.disabled = false;
        }
        else {
            myButton.disabled = true;
        }
    });
    var myForms = document.querySelector('.needs-validation');
    myForms.addEventListener('submit', function (event) {
        if (
            !myForms.checkValidity() || 
            !controlName() ||
            !controlEmail() ||
            !controlPhone() ||
            !controlMessage() 
        ) {
            event.preventDefault();
            event.stopPropagation();
        }
    }, false);
})();