var nconf = require('nconf');
var path = require('path');

nconf.argv();
var configFile = "config.json";
nconf.file({file: path.join(__dirname, configFile)});

nconf.defaults({
    "http": {"port": 3000, "host": "0.0.0.0"}
});

module.exports = nconf;