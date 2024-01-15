import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://endrosements-5a40c-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const endrosementInDB = ref(database, "endrosement")

const publishBtn = document.getElementById("pubish-btn")
const textareaEl = document.getElementById("textarea-el")
const endorsementEl = document.getElementById("indorsement")
const indrosementElDiv = document.getElementById("indrosement-div")

publishBtn.addEventListener("click", function() {
    let textareavalue = textareaEl.value
    push(endrosementInDB, textareavalue)
    textareaEl.value = ""
})


onValue(endrosementInDB, function(snapshot) {

        let endrosementArray = Object.values(snapshot.val()) 

        indrosementElDiv.innerHTML = ""

        for(let i = 0; i < endrosementArray.length; i++) {          
           let currentEndrosement = endrosementArray[i]
           indrosementElDiv.innerHTML +=
           `
             <p>${currentEndrosement}</p>
           `
        }

})

