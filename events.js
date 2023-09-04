// var fireCount = 0;
// var start = new Date();
// var timer = setInterval(function () {
//   if (new Date() - start > 1000) {
//     clearInterval(timer);
//     console.log(fireCount);
//     return;
//   }
//   fireCount++;
// }, 0);


// var fireCount = 0;
// var start = new Date();
// var tick = function () {
//   if (new Date() - start > 1000) {
//     console.log(fireCount);
//     return;
//   }
//   fireCount++;
//   process.nextTick(tick);
// };
// process.nextTick(tick);



// var fs = require("fs");
// fs.readdir(".", function (err, filenames) {
//   if (err) throw err;
//   console.log("Number of Directory Entries:", filenames.length);
//   filenames.forEach(function (name) {
//     fs.stat(name, function (err, stats) {
//       if (err) throw err;
//       var result = stats.isFile() ? "file" : "directory";
//       console.log(name, "is a", result);
//     });
//   });
// });



var fs = require("fs");
var total = 0;
fs.readdir(".", function (err, filenames) {
  if (err) throw err;
  console.log("Number of Directory Entries:", filenames.length);
  filenames.forEach(function (name) {
    fs.stat(name, function (err, stats) {
      if (err) throw err;
      total += stats.size;
    });
  });
});
console.log("Total size:", total);