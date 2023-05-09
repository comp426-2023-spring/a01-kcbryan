const http = require('http');
const fs = require('fs');
const args = require('minimist')(process.argv.slice(2));

// access port variable from terminal, and assign default variable
let port = args.port
if (port==null) {
	port=3000;
}

fs.readFile(`./public/index.html`, (err, data) => {
	//if file is not found or is unreadable, return error
	if (err) {
		console.error(err);
		return;
	}
	else {
		http.createServer((req, res) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		res.end(data)
	}).listen(port, () => {
		//return console.log message to know if port has been properly started
		console.log(`Server listening on port ${port}`);
	});
}});