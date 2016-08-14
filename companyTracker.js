function CompanyTracker() {}

CompanyTracker.prototype = {
  CreateCompanyArray: function() {
  var company_array = [];
  new BufferedReader ("companies.txt", { encoding: "utf8" })
    .on ("error", function (error){
        console.log ("error: " + error);
    })
    .on ("line", function (line){
        company_array.push(line);
    })
    .on ("end", function (){
        console.log ("EOF");
    })
    .read ();
    return company_array;
  }
}

obj = new CompanyTracker();
console.log(obj.CreateCompanyArray());
