const fs = require('fs');
fs.readFile('info.json', function(err, data) {
   console.log(data) 
  });