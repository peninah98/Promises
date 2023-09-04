let promise = new Promise((resolve,reject)=>{
    let a = 1+9
    if(a===2){
        resolve('Success')
    }

    else{
        reject('Failed')
    }
})


promise.then((message)=>{
    console.log('This is in then ' + message)
}).catch((message)=>{
    console.log("this is in catch " + message);
})