// Callback function : calling a function inside another function is called a callback
function one (call_two){
    call_two()
    console.log('Step 1 call function two')
   
}

function two (){
    console.log('Step 2')
}

one(two)

