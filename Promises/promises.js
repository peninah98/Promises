const container = document.querySelector(".container");

const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    // console.log(request, request.readyState)
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("Could not fetch data", undefined);
    }
  });

  request.open("GET", resource);
  request.send();
};

// promies example

const getsomething = () =>{
    return new Promise((resolve,reject)=>{
        //fetch somedata
        resolve('some data')
        reject("Some error") 
    })
}


// getsomething().then((data) =>{
//     console.log(`Data is ${JSON.stringify(data)}`)
// },(err)=>{
//     console.log(`Error hapened ${err}`)
// })


getsomething().then(data=>{
    console.log(data)
}).catch(err =>{
    console.log(err)
})