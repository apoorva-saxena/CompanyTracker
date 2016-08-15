var rd = require('readline');
var fs = require('fs');

var lineReader = rd.createInterface({
  input: fs.createReadStream('companies')
});

lineReader.on('line', function(line) {
  processLine(line)
});

function processLine(line) {
  var whois = require('node-whois');
  whois.lookup(line, function(err, data) {
    console.log(line, ':', data)
  })
}
