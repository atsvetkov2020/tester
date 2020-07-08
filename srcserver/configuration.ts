export {};
const ConfigurationImpl = require("./components/configurationimpl");
const conf = new ConfigurationImpl();
conf.init();
module.exports = conf;