let inputField = document.getElementById("message")
let outputField1 = document.getElementById("article-1");
let outputField2 = document.getElementById("article-2");
// function handleKeyPress(event){
//     outputField.innerHTML = event.target.value
//     console.log("")
// }

inputField.addEventListener("keyup", function (event){
    outputField1.innerHTML = event.target.value
    outputField2.innerHTML = event.target.value
    console.log(event)
})