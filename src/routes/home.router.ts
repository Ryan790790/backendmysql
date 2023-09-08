import mysql2 from 'mysql2'
const Router = require('@koa/router');
const mysqldb2 = require('../database/db');
const router = new Router({
    prefix: '/home'
})


router.get('/test', (ctx: any) => {
    ctx.body = 'Hello Wolrd - post';
})

router.get("/data", (req: any, res: any) => {
    await new Promise(resolve => {
        mysqldb2.database.query('select * from darkrp.player_data', (err: any, result: any, fields: any) => {
            if (err) {
                console.error("An error has occurred:" + err);
                return;
            }
            res.json(result);
            resolve();
        })
    })
})

module.exports = router;