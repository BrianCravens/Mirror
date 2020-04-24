// let inputField = document.getElementById("message")
// let outputField1 = document.getElementById("article-1");
// let outputField2 = document.getElementById("article-2");
// let outputFieldAll = document.getElementsByClassName(".article-item")

// inputField.addEventListener("keyup", function (event){
//     outputField1.textContent = event.target.value
//     outputField2.textContent = event.target.value
//     outputFieldAll.textContent = event.target.value
//     console.log(event)
// })

document.querySelector("#message").addEventListener("keyup", () => {
    let boxes = document.querySelectorAll(".article-item")
    for( let i = 0; i < boxes.length;i++){
        boxes[i].innerHTML = event.target.value
    }
})