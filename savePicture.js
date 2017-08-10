var fs = require('fs');
var exist = 1;

exports.data = function(req, res){

	var k = 0 ;
	var path = "/Users/vduraphe@tibco.com/node-js-sample/public/face_recognition/examples/web/known_faces" ;
    var body = '';


    req.on('data', function (data) {
        body += data;
    });

    req.on('end', function () {

        console.log(body);
        var parseData = JSON.parse(body); //JSON string to javascript object
        var nameFromData = parseData.name;
        var base64DataFromName = parseData.results;
        var newPath = path + "/" + nameFromData + ".jpg" ; //getting from file system
    	var base64Data = base64DataFromName.replace(/^data:image\/jpeg;base64,/, "");
    	console.log(base64Data);
    	
    	fs.writeFile(newPath, base64Data, "base64", function(err) {
    		console.log(err);
    	});

            // use post['blah'], etc.
    });

}