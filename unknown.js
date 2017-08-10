var fs = require('fs'); //file system object

exports.data = function(req, res){

	
	//this is where Vaidehi writes the code to get all the files in a directory and then return them.
	path = "/Users/vduraphe@tibco.com/node-js-sample/public/face_recognition/examples/web/unknown_faces" ;
	path2 = "//localhost:5000/public/face_recognition/examples/web/unknown_faces" ;
	var files = fs.readdirSync(path); //files containes all files from path
	var jsArray = [];
	
	for (var file in files) {
		console.log(files[file]);
		if (files[file].split('.').pop() == "jpg") {
			jsArray.push(path2 + "/" + files[file]); // if file is .jpg, push to array
			//add to array or js object
		}
	}

	//send array or object

	res.send(jsArray);
	console.log("sent");
	//res.send('DATAD DDDAASDASD');

}