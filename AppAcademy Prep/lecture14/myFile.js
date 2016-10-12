var fs = require("fs");

function getRecordsFromFile(filename, cb) {
  fs.readFile(filename, 'utf8', function(err, data) {
    if (err) {
      console.log("---Error---");
      console.log(err);
      return;
    }

    var records = data.split("\n");

    cb(records);
  });
}

function mostCoolFromFile(filename, cb) {
  getRecordsFromFile(filename, function(records) {
    var coolest = "Jim";
    var coolestRating = 0;

    records.forEach(function(record) {
      var name = record.split(" ")[0];
      var rating = parseInt(record.split(" ")[1]);
console.log(name)
      if (rating > coolestRating) {
        console.log(name)

        coolestRating = rating;
      }
    });

    cb(coolest);
  });
}

mostCoolFromFile("data.txt", function(coolestPerson) {
  console.log(coolestPerson);
});
