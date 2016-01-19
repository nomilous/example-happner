var path = require('path');
module.exports = {
  name: 'DataServer',
  version: '0.0.1',
  datalayer: {
    host: process.env.DATA_HOST,
    port: process.env.DATA_PORT,
    persist: true,
    dbfile: path.normalize(__dirname + '/../data/data.nedb')
  }
}
