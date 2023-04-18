const http = require('http');
const fs = require('fs');
const args = require('minimist')(process.argv.slice(2));

let port = args.port
if (port==null) {
	port=3000;
}

fs.readFile(`./public/index.html`, (err, data) => {
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
		console.log(`Server listening on port ${port}`);
	});
}});