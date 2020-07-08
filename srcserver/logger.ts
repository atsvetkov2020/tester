export {};
const winston = require('winston');
const loggerconfig = require('./loggerconfig');

winston.loggers.add("DEFAULT", loggerconfig.getConfig());

module.exports.getLogger = (label:string = "DEFAULT") => {
    if(!winston.loggers.has(label)){
        winston.loggers.add(label, loggerconfig.getConfig(label));
    }
    return winston.loggers.get(label);

};
