'use strict'

const STORAGE_KEY = 'settingDB'

var gUser
_createUser()

function getValue(key) {
    return gUser[key]
}

function setBGColor(value) {
    const newBGColor = gUser.bgColor = value
    _saveSettingsToStorage()
    return newBGColor
}
function setColor(value) {
    const newTxtColor = gUser.txtColor = value
    _saveSettingsToStorage()
    return newTxtColor

}

function _saveSettingsToStorage() {
    saveToStorage(STORAGE_KEY, gUser)
}

function _createUser() {
    gUser = loadFromStorage(STORAGE_KEY)
    if (gUser && gUser.length) return
    gUser = {
        email: '',
        txtColor: '',
        bgColor: '',
        age: '',
        birthDate: '',
        birthTime: ''
    }
    _saveSettingsToStorage()
}