'use strict'
const gUser = {
    email: '',
    txtColor: '',
    bgColor: '',
    age: '',
    birthDate: '',
    birthTime: ''
}

const STORAGE_KEY = 'settingDB'

function setBGColor(value) {
    const newBGColor = user.bgColor = value
    _saveSettingsToStorage()
    return newBGColor

}
function setColor(value) {
    const newTxtColor = user.txtColor = value
    _saveSettingsToStorage()
    return newTxtColor

}

function _saveSettingsToStorage() {
    saveToStorage(STORAGE_KEY, user)
}

