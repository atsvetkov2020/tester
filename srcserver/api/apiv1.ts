export {};
const express = require('express');
const router = express.Router();
const log = require('../logger');
import { response } from "express";

router.get('/tester/api/version', (req: any, res: any) => {res.status(200).json({version: "v1"})});

router.get('/tester/items', getItems);

function getItems(req: any, res: any){
    log.traceAPICall(req);
    const items = [
        {
            "id": "Group10Test01",
            "name": "Group10Test01",
            "group-id": "Group10",
            "group-name": "Group10",
            "status": "unknown"
        },
        {
            "id": "Group10Test02",
            "name": "Group10Test02",
            "group-id": "Group10",
            "group-name": "Group10",
            "status": "pass"
        },
        {
            "id": "Group10Test03",
            "name": "Group10Test03",
            "group-id": "Group10",
            "group-name": "Group10",
            "status": "fail"
        },
        {
            "id": "Group56Test01",
            "name": "Group56Test01",
            "group-id": "Group56",
            "group-name": "Group56",
            "status": "error"
        },
        {
            "id": "Group57Test01",
            "name": "Group57Test01",
            "group-id": "Group57",
            "group-name": "Group57",
            "status": "disabled"
        },
        {
            "id": "Group57Test02",
            "name": "Group57Test02",
            "group-id": "Group57",
            "group-name": "Group57",
            "status": "test"
        },
        {
            "id": "Group57Test0201",
            "name": "Group57Test0201",
            "group-id": "Group57",
            "group-name": "Group57",
            "status": "test"
        }
    ];
    try {
        res.status(200).json(items);
    }catch(e) {
        log.errorRequest(req, e.message);
    }
}

module.exports = router;
