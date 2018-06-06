var mkdirp = require("mkdirp");

mkdirp("./node_modules/moment/min/locale", function(err) {
  if (err) console.error(err);
  else console.log("Added locale folder to moment");
});
