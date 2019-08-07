const middlewares = require('./middleware');
const routerConfig = require('./router');
const Koa = require('koa');
const Router = require('koa-router')
const app = new Koa();
const router = new Router()

const getRouter = routerConfig.get;
const postRouter = routerConfig.post;
// 装载中间件
for (let key in middlewares) {
    const middleware = middlewares[key];
    app.use(middleware);
}

// 配置好路由
for (let key in getRouter) {
  const actionItem = getRouter[key];
  router
    .get(key, actionItem)
}
for (let key in postRouter) {
  const actionItem = postRouter[key];
  router
    .post(key, actionItem)
}

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(9999);