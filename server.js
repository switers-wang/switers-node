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

app.listen(9999);