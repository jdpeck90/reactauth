var fs = require("fs");

function getRecordsFromFile(filename) {
  fs.readFile(filename, 'utf8', function(err, data) {
    if (err) {
      console.log("---Error---");
      console.log(err);
      return;
    }

    var records = data.split("\n");

    console.log(records);
    })
  }

  getRecordsFromFile("data.txt");
