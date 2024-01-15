import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://endrosements-5a40c-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const endrosementInDB = ref(database, "endrosement")


const publishBtn = document.getElementById("pubish-btn")
const textareaEl = document.getElementById("textarea-el")
const formInputEl = document.getElementById("form-input-el")
const formToEl = document.getElementById("form-to-el")

publishBtn.addEventListener("click", function() {
    let textareavalue = textareaEl.value
    push(endrosementInDB, textareavalue)
    textareaEl.value = ""
    formInputEl.value = ""
    formToEl.value = ""
})

