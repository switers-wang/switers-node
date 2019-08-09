/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-07 11:19:01
 * @LastEditTime: 2019-08-09 11:59:44
 * @LastEditors: Please set LastEditors
 */
const fs = require('fs');
const path = require('path');
module.exports = async (ctx, next) => {
    ctx.type = 'html';
    // 相对路径是相对 process.cwd()路径
    ctx.response.body = fs.createReadStream('./template.html');
}
