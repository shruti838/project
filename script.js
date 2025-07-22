const authModel = document.querySelector('.auth-model');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const loginBtnModel = document.querySelector('.login-btn-model');
const closeBtnModel = document.querySelector('.close-btn-model');
const profileBox = document.querySelector('.profile-box');
const avatarcircle = document.querySelector('.avatar-circle');
const alertBox = document.querySelector('.alert-box');

registerLink.addEventListener('click', () => authModel.classList.add('slide'));
loginLink.addEventListener('click', () => authModel.classList.remove('slide'));

if(loginBtnModel) loginBtnModel.addEventListener('click', () => authModel.classList.add('show'));
closeBtnModel.addEventListener('click', () => authModel.classList.remove('show','slide'));
if(avatarcircle) avatarcircle.addEventListener('click', () => profileBox.classList.toggle('show'));

if (alertBox){
    setTimeout(() => alertBox.classList.add('show'),50);
    setTimeout( () => {
        alertBox.classList.remove('show');
        setTimeout(() => alertBox.remove(),1000);
    },6000);
}


