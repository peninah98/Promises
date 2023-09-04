let myPromise = new Promise(function(resolve, reject){
  // "Producing Code" (May take some time)
  resolve()
  reject()
})


// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function (value) {
    /* code if successful */
  },
  function (error) {
    /* code if some error */
  }
);