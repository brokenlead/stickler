var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect();

app.use(serveStatic(__dirname + '/app'));
app.listen(5000);

console.log('Listening on port 5000...');
