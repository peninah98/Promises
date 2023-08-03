let stocks = {
    Fruits : ['Strawberry','grapes', 'banana', 'apple'],
    liquid : ['water','ice'],
    holder : ['cone','cup', 'stick'],
    toppings : ['chocolate','peanuts']

}

let isShopOpen = true
let order = (time,work) =>{
    return new Promise( (resolve,reject) =>{

        if(isShopOpen){
            setTimeout(() => {
                resolve(work() )  
            }, time);
           
        }

        else{
            console.log(`Our shop is closed`)
        }
    } )

}

order(2000,()=> console.log(`${stocks.Fruits[0]} was selected`))

.then(()=>{
    return order(0,()=> console.log("Production has started"))
})


.then(()=> {
    return order(2000,()=>console.log(`The fruits was added`))
})


.then(()=> {
    return order(1000,()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`))
})



.then(()=> {
    return order(1000,()=>console.log(`Start the machine`))
})


.then(()=> {
    return order(2000,()=>console.log(`Ice cream placed on ${stocks.holder[0]}`))
})

.then(()=> {
    return order(3000,()=>console.log(`${stocks.toppings[0]} was selected`))
})


.then(()=> {
    return order(1000,()=>console.log(`Icecream was served`))
})




.catch(()=>{
    console.log('Customer left')
})

.finally(()=>{
    console.log('Day ended our shop is closed')
})