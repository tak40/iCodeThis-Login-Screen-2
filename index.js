/** @format */

const signInBtn = document.getElementById('sign-in-btn')
const signUpBtn = document.getElementById('sign-up-btn')
const signInForm = document.getElementById('sign-in-form')
const signUpForm = document.getElementById('sign-up-form')

signInBtn.addEventListener('click', function () {
    signInForm.classList.add('form--active')
    signUpForm.classList.remove('form--active')
    signInBtn.classList.add('form-nav__btn--active')
    signUpBtn.classList.remove('form-nav__btn--active')
})

signUpBtn.addEventListener('click', function () {
    signUpForm.classList.add('form--active')
    signInForm.classList.remove('form--active')
    signUpBtn.classList.add('form-nav__btn--active')
    signInBtn.classList.remove('form-nav__btn--active')
})
