
var http = require("http");

var s = http.createServer(function(req, res) {

    var body = 'Thanks for calling! \n';

    var content_length = body.lengtth;

    res.writeHead(200, {
        'Content-Length': content_length,
        'Content-Type': 'text/plain'
    });

    res.end(body);
});

//var s = http.createServer(process_request);

s.listen(8080);