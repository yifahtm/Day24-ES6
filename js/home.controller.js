'use strict'

function onInit() {
    renderSettings()
}

function renderSettings() {
    document.body.style.color = getValue('txtColor')
    document.body.style.backgroundColor = getValue('bgColor')
    document.querySelector('.time-home').innerText = getValue('birthTime')
    document.querySelector('.dob-home').innerText = getValue('birthDate')
}