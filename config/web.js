var path = require('path');
module.exports = {
  name: 'WebServer',
  datalayer: {
    host: process.env.WWW_HOST,
    port: process.env.WWW_PORT,
    persist: true,
    dbfile: path.normalize(__dirname + '/../data/web.nedb')
  }
}
