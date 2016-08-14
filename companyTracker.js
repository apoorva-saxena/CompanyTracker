var DataReader = require ("../lib").DataReader;
var FS = require ("fs");
var file = "companies";

function CompanyTracker() {}

CompanyTracker.prototype = {
  CreateCompanyArray: function() {
  var company_array = [];
  new DataReader (file, { encoding: "utf8" })
		.on ("error", function (error){
			console.log (error);
		})
		.on ("line", function (line, nextByteOffset){
			data.lines++;

			line = line.trim ().toLowerCase ();
			count (line, word.ARTICLE);
			count (line, word.SECTION);
			count (line, word.CONSTITUTION);
			count (line, word.PRESIDENT);

			countWords (line);

			//If we found the word "Washington" we wait for 3 seconds
			if (line.indexOf ("washington") !== -1){
				//If the reading is paused the piped stream is also paused
				this.pause ();
				console.log ("Washington found. Waiting 3 seconds.\n");
				var me = this;
				setTimeout (function (){
					me.resume ();
				}, 3000);
			}
		})
		.on ("end", function (){
			printData ();
		})
		.read ();
}

var obj = new CompanyTracker();
console.log(obj.CreateCompanyArray());
