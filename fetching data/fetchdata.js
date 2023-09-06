// const header = document.querySelector("#fetchingheader");

// header.style.color = 'red'

// fetch('../todos.json').then((response)=>{
//     console.log("Resolved", response)
//     return response.json()

// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log("Error", err)

// })


const getTodos= async() =>{
  const response = await fetch('../toxdos.json')
  if(response.status !== 200){
    throw new Error('Something went wrong!') 
  }
  const data = await response.json()
  return data
  
}



getTodos()
    .then((data)=> console.log('Resolved', data[2]))
    .catch((err)=>console.log('Rejected ',err.message))
 








