const fs = require('fs');
module.exports = async (ctx, next) => {
    ctx.body = '<span>hello world</span>';
    ctx.type = 'html';
    // ctx.body = fs.createReadStream('../template.html');
}
