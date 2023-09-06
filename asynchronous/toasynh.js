const container = document.querySelector(".container");

const getTodos = (resource,callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    // console.log(request, request.readyState)
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText)
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("Could not fetch data", undefined);
    }
  });

  request.open("GET", resource);
  request.send();
};




getTodos('../run.json',(err, data) => {
  console.log(data);
  getTodos('../todos.json',(err,data)=>{
    console.log(data);
    getTodos('../brake.json',(err,data) =>{
      console.log(data)
    })
  })
  container.textContent = data

});






