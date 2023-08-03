let stocks = {
    Fruits : ['Strawberry','grapes', 'banana', 'apple'],
    liquid : ['water','ice'],
    holder : ['cone','cup', 'stick'],
    toppings : ['chocolate','peanuts']

}

let order =(Fruit_name,cal_production)=>{

    setTimeout(()=>{
        console.log(`${stocks.Fruits[Fruit_name]} was selected`)
        cal_production()
    },2000)
   
}

let production =()=>{
  setTimeout(()=>{

    console.log(`Production has staraeted`)
    setTimeout(() => {
        
        console.log(`The fruits has been chopped`)
        setTimeout(() => {
            console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
            setTimeout(() => {
                console.log(`The machine was started`)
                setTimeout(() => {
                    console.log(`Icecream was placed on ${stocks.holder[0]}`)
                    setTimeout(() => {
                        console.log(`${stocks.toppings[0]} was added`)
                        setTimeout(() => {
                            console.log('Serve icecream')
                        }, 2000);
                    }, 3000);
                }, 2000);
            }, 1000);
        }, 1000);
    }, 2000);
  },0)
}

// this structure is callback hell to resolve it let use promise!!
// See you in promise .js enjoy coding

order(0, production)