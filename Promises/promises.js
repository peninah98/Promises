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
    console.log('Resolved',data[1]);

}).catch((err)=>{
    console.log("Error",err)
})

// promies example

// const getsomething = () =>{
//     return new Promise((resolve,reject)=>{
//         //fetch somedata
//         resolve('some data')
//         reject("Some error") 
//     })
// }


// getsomething().then((data) =>{
//     console.log(`Data is ${JSON.stringify(data)}`)
// },(err)=>{
//     console.log(`Error hapened ${err}`)
// })


// getsomething().then(data=>{
//     console.log(data)
// }).catch(err =>{
//     console.log(err)
// })