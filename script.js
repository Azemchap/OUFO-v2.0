'use strict'


const menuBtn = document.querySelector('.menu')
const navBar = document.querySelector('.ul')

menuBtn.addEventListener('click', () => {
    navBar.classList.toggle('active')
})
