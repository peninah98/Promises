// This promise fulfilled when randomNumber is less than 0.5 and rejected when greater than five


let mypromise = new Promise(function(resolve, reject){
    setTimeout(()=>{
         const randomNumber = Math.round(Math.random() * 10) / 10;
        if(randomNumber < 0.5){
            resolve("Success")
        }

        else{
            reject(new Error("Failed!"))
        }
        console.log(randomNumber)
    },1000)

})

mypromise
.then((result) =>{
    console.log(`Result: ${result}`)     // Result: Success
})
.catch((error) => {
    console.log(`${error} happened`)    // Failed! happened
})