const fs = require('fs');
fs.readFile("info.json",function(err, data){
    var content = data.toString();
    convert_json(content);
})
var Age = [21,19]
function convert_json(content){
    var convert_json = JSON.parse(content);
    for(var i =0; i < Object.keys(convert_json).length; i++){
        convert_json[i].Age = Age[i]
    }
    var write = JSON.stringify(convert_json)
    fs.writeFile("update.json",write,function(err){
        if (err) console.log(err)
    })
}
