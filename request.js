const promise = new Promise((resolve,reject)=>{
   setTimeout(() => {
    resolve('Data back from server')
   }, 3000);

   setTimeout(() => {
    reject('No data back from server')
   }, 4000);
})


promise.then((response)=>{
    console.log((response))
}).catch((error)=>console.log((`Error: ${error}`)))