var rd = require('readline');
var fs = require('fs');

var lineReader = rd.createInterface({
  input: fs.createReadStream('companies')
});

lineReader.on('line', function(line) {
  processLine(line)
});

processLine = function(line) {
  console.log('Process this line:', line);
}
