const fs = require('fs');
module.exports = async (ctx, next) => {
    ctx.body = '<span>hello world</span>';
    ctx.type = 'html';
    // fs.open('../template.html');
    const a = fs.createReadStream('./testError.js');
}
