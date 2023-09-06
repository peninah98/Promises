const header = document.querySelector("#fetchingheader");
header.style.align = 'center'
header.style.color = 'red'

fetch('../todos.json').then((response)=>{
    console.log("Resolved", response)

}).catch((err)=>{
    console.log("Error", err)

})