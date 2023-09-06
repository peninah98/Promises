const container = document.querySelector(".container");

const getTodos = (resource) => {
    return new Promise((resolve,reject)=>{
        const request = new XMLHttpRequest();

        request.addEventListener("readystatechange", () => {
          // console.log(request, request.readyState)
          if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            resolve( data);
          } else if (request.readyState === 4) {
            reject("Error,Could not fetch data");
          }
        });

        request.open("GET", resource);
        request.send();

    })
  
};

getTodos('../todos.json').then(data=>{
    console.log(' Promise 1 Resolved',data);
   return getTodos('../run.json')

}).then((data)=>{
    console.log("Promise 2 resolved",data)
    return getTodos('../brake.json')
}).then((data)=>{
    console.log("Promise 3 resolveeeed", data[3])
}).catch((err)=>{
    console.log("Error",err)
})

