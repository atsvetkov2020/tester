export {};
const apiAnswer = require("./apianswer");
class apiHelper {
    static prepareErrorResponse(res: any, code: number, msg: string, data: object, error: object) {
        res.status(code).json(new apiAnswer(false, code, msg, data, error));
    }
}

module.exports = apiHelper;