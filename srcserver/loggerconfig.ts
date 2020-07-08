import {TransformableInfo} from "logform";

export {};
const winston = require('winston');

module.exports.getConfig = (label:string = "TESTER") => {
    return  {
        transports: [
            new winston.transports.Console()
        ],
        "level": "info",
        "format": winston.format.combine( winston.format.timestamp({
            format: "YYYY-MM-DD HH:mm:ss.SSS"
        }), winston.format.label({
            "label": label
        }), winston.format.printf((info: TransformableInfo) => {
            return `[${info.timestamp}] [${info.level.toUpperCase()}] [${info.label}] - ${info.message}`;})
        )
    }
};
