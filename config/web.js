var path = require('path');
module.exports = {
  name: 'WebServer',
  version: '0.0.1',
  datalayer: {
    host: process.env.WWW_HOST,
    port: process.env.WWW_PORT,
    persist: true,
    dbfile: path.normalize(__dirname + '/../data/web.nedb')
  },
  modules: {
    /* shortcut: alternative to having node_modules/data */
    'data': {
      instance: require('../lib/components/data')
    }
  },
  components: {
    'www': {
      web: {
        routes: {
          /* 
           * serving "node_modules/www/static" at "/"
           * - it serves at "/" because the component is called "www"
           */
          static: 'static'
        }
      }
    },
    'data': {

    }
  }
}
