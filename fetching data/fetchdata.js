const header = document.querySelector("#fetchingheader");

header.style.color = 'red'

fetch('../todos.json').then((response)=>{
    console.log("Resolved", response)
    return response.json()

}).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log("Error", err)

})