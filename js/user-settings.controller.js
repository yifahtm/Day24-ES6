'use strict'

function onInit() {
    renderSettings()
}

function renderSettings() {
    const elForm = document.querySelector('.frmSettings')

    elForm.querySelector('.color-input').value = getValue('txtColor') || ''
    elForm.querySelector('.bg-color-input').value = getValue('bgColor') || ''
    elForm.querySelector('.birth-date-input').value = getValue('birthDate') || ''
    elForm.querySelector('.birth-time-input').value = getValue('birthTime') || ''
}

function onSetBGColor({ value }) {
    const elPage = document.querySelector('html')
    elPage.style.backgroundColor = setBGColor(value)
}

function onSetColor({ value }) {
    const elPage = document.querySelector('html')
    elPage.style.color = setColor(value)
}

function onSetBirthTime({ value }) {
    const elDateTime = document.querySelector('.birth-date-time')
    const elSpan = elDateTime.querySelector('.time-home')
    elSpan.innerText = value
}

function onSetDOB({ value }) {
    const elDateTime = document.querySelector('.birth-date-time')
    const elSpan = elDateTime.querySelector('.dob-home')
    elSpan.innerText = value
}