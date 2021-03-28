var fs = require('fs');

function writeScreenShot(data:string, filename:string) {
    var stream = fs.createWriteStream(filename);

    stream.write(new Buffer(data, 'base64'));
    stream.end();
}