'use strict'

function onSetBGColor({ value }) {
    console.log(value)
    const elPage = document.querySelector('html')
    elPage.style.backgroundColor = setBGColor(value)


}

function onSetColor({ value }) {
    console.log(value)
    const elPage = document.querySelector('html')
    elPage.style.color = setColor(value)

}