module.exports = async (ctx,next) => {
    try {
		await next();
	} catch(e){
        ctx.response.status = e.statusCode || e.status || 503;
        ctx.response.body = 'error test';
	}

}