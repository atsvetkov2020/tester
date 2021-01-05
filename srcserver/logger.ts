export {};
const winston = require('winston');
const loggerconfig = require('./loggerconfig');
const cuid = require('cuid');

winston.loggers.add("DEFAULT", loggerconfig.getConfig());

const getLogger = (label:string = "DEFAULT") => {
    if(!winston.loggers.has(label)){
        winston.loggers.add(label, loggerconfig.getConfig(label));
    }
    return winston.loggers.get(label);
};

const logger = getLogger("API");

const traceRequest = function(req: any, msg: string){
    logger.info('[reqid:'+getRequestId(req)+']: ' + msg );
};

const traceAPICall = function(req: any){
    let clientip = getClientIP(req);
    req.trace = {
        "requestId": cuid(),
        "clientip": clientip };

    traceRequest(req,'<--- ' + req.method + ' ' + req.url +' ' +
        JSON.stringify(req.params) +
        ' ' +
        JSON.stringify(req.body) +
        ' (' + req.trace.clientip + ')');
};

const getClientIP = function(req: any){
    let clientip = req.connection.remoteAddress;
    if(req.headers['x-forwarded-for']){
        clientip += ',' + req.headers['x-forwarded-for'];
    }
    return clientip;
};

const getRequestId = function(req: any){
    return req.hasOwnProperty('trace') &&
    req.trace.hasOwnProperty('requestId') ? req.trace.requestId : 'noid';
}

const errorRequest = function(req: any, msg: string){
    logger.error('[reqid:'+getRequestId(req)+']: ERROR ' + msg );
};

module.exports = {
    getLogger: getLogger,
    traceRequest: traceRequest,
    traceAPICall: traceAPICall,
    errorRequest: errorRequest
}
