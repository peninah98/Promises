const list = document.querySelector("#list");
fetch("https://jsonplaceholder.typicode.com/users").then(res=>{
    return res.json()
}).then(data =>{
    console.log(data)
    data.forEach(user => {
        const markup = `<li> ${user.name}</li>`
        list.insertAdjacentHTML('beforeend',markup)
        
    });
}).catch(error =>console.log(error))