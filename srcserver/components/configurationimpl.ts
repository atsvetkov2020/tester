export {};
const logger = require('../logger').getLogger('CONF');
const path = require("path");
const fs = require("fs");
const settingsFilePath = path.join(__dirname, '../..', 'settings.json');
logger.debug(`settings:${settingsFilePath}`);

const ENVIRONMENT = {
    PORT_VARIABLE: "TESTER_PORT"
};

const DEFAULT_SETTINGS = {
    port: 4000
};

type SettingsType = {
    port?: number
};

class ConfigurationImpl{
    public settings: SettingsType;

    constructor() {
        this.settings = {};
    }

    public init() {
        let fileSettings = this.readSettingsFile();
        this.settings = {...fileSettings};

        if(ENVIRONMENT.PORT_VARIABLE in process.env) {
            this.settings.port = parseInt(process.env[ENVIRONMENT.PORT_VARIABLE]!);
        }
    }

    public readSettingsFile() {
        let settings = {};
        try {
            if (fs.existsSync(settingsFilePath)) {
                let content = fs.readFileSync(settingsFilePath);
                settings = JSON.parse(content);
            }
        } catch (err) {
            logger.error(err);
        }
        logger.info(`settings file:${JSON.stringify(settings, null, 2)}}`);
        return settings;
    }
}

module.exports = ConfigurationImpl;