

let promise = new Promise((resolve,reject)=>{
let name = 'Penine'


if(name == "Luc"){
resolve(`Welcome ${name}`)
}
else{
    reject(`
    Oops you are not on list
    We were expecting ${name} `)
}

})

promise.then(()=>{
    console.log("Success")
}).catch(()=>{
    console.log(`Sorry  you can apply for the next cohort`)
}).finally(()=>{
    console.log(`Have a good day we are closing`)
})

