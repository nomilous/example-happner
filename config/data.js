var path = require('path');
module.exports = {
  name: 'DataServer',
  datalayer: {
    host: process.env.DATA_HOST,
    port: process.env.DATA_PORT,
    persist: true,
    dbfile: path.normalize(__dirname + '/../data/data.nedb')
  }
}
