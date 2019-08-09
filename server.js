/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-07 08:00:29
 * @LastEditTime: 2019-08-09 11:35:46
 * @LastEditors: Please set LastEditors
 */
const middlewares = require('./middleware');
const routerConfig = require('./router');
const Koa = require('koa');
const Router = require('koa-router')
const app = new Koa();
const router = new Router()

// 装载中间件
for (let key in middlewares) {
    const middleware = middlewares[key];
    app.use(middleware);
}

// 配置好路由
for (let methodKey in routerConfig) {
  const methodAllActions = routerConfig[methodKey];
  for (let key in methodAllActions) {
    const actionItem = methodAllActions[key];
    router[methodKey](key, actionItem)
  }
}

app
  .use(router.routes())
  .use(router.allowedMethods());

// 监听9999端口
app.listen(9999);