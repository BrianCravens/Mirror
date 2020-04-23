let inputField = document.getElementById("message")
let outputField1 = document.getElementById("article-1");
let outputField2 = document.getElementById("article-2");

inputField.addEventListener("keyup", function (event){
    outputField1.textContent = event.target.value
    outputField2.textContent = event.target.value
    console.log(event)
})