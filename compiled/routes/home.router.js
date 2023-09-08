"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require('@koa/router');
const mysqldb2 = require('../database/db');
const router = new Router({
    prefix: '/home'
});
router.get('/test', (ctx) => {
    ctx.body = 'Hello Wolrd - post';
});
router.get("/data", (req, res) => {
    yield new Promise(resolve => {
        mysqldb2.database.query('select * from darkrp.player_data', (err, result, fields) => {
            if (err) {
                console.error("An error has occurred:" + err);
                return;
            }
            res.json(result);
            resolve();
        });
    });
});
module.exports = router;
