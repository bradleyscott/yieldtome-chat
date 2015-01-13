/**
 * Production environment settings
 *
 * This file can include shared settings for a production environment,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

    ssl: {
     ca: require('fs').readFileSync(__dirname + '/ssl/2b13885ad06d09.crt'),
     key: require('fs').readFileSync(__dirname + '/ssl/key.pem'),
     cert: require('fs').readFileSync(__dirname + '/ssl/cert.pem')
   },

    yieldtome: {
        host: 'beta-api.yieldto.me',
        port: '443'
    },

  /***************************************************************************
   * Set the default database connection for models in the production        *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/
    connections: {
        mongodb: {
            adapter: 'sails-mongo',
            host: 'localhost',
            port: 27017,
            database: 'yieldtome-chat'
        }
    },

    models: {
        connection: 'mongodb'
    },

  /***************************************************************************
   * Set the port in the production environment to 80                        *
   ***************************************************************************/

  port: 1338,

  /***************************************************************************
   * Set the log level in production environment to "silent"                 *
   ***************************************************************************/

  // log: {
  //   level: "silent"
  // }

};
