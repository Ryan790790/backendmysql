"use strict";
const Koa = require('koa');
const HomeRoutes = require('./routes/home.router');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
app.use(bodyParser());
app.use(HomeRoutes.routes())
    .use(HomeRoutes.allowedMethods());
app.listen(3000);
console.log('Application is running!');
console.log('Application is running on port 3000');
