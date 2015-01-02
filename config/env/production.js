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

var winston = require('winston');

var customLogger = new winston.Logger({
    transports: [
        new(winston.transports.File)({
            level: 'debug',
            filename: './logs/yieldtome.log'
        }),
    ],
});

module.exports = {

    log: {

        /***************************************************************************
         *                                                                          *
         * Valid `level` configs: i.e. the minimum log level to capture with        *
         * sails.log.*()                                                            *
         *                                                                          *
         * The order of precedence for log levels from lowest to highest is:        *
         * silly, verbose, info, debug, warn, error                                 *
         *                                                                          *
         * You may also set the level to "silent" to suppress all logs.             *
         *                                                                          *
         ***************************************************************************/

        // level: 'info'
        colors: false, // To get clean logs without prefixes or color codings
        custom: customLogger
    },

    yieldtome: {
        host: 'test-api.yieldto.me',
        port: '80'
    },

    /***************************************************************************
     * Your SSL certificate and key, if you want to be able to serve HTTP      *
     * responses over https:// and/or use websockets over the wss:// protocol  *
     * (recommended for HTTP, strongly encouraged for WebSockets)              *
     *                                                                         *
     * In this example, we'll assume you created a folder in your project,     *
     * `config/ssl` and dumped your certificate/key files there:               *
     ***************************************************************************/

    ssl: {
        ca: require('fs').readFileSync(__dirname + './ssl/yieldtome.crt'),
        key: require('fs').readFileSync(__dirname + './ssl/key.pem'),
        cert: require('fs').readFileSync(__dirname + './ssl/cert.pem')
    },

    connections = {
        localMongodb: {
            adapter: 'sails-mongo',
            host: 'localhost',
            port: 27017,
            database: 'yieldtome_chat'
        }
    },

    /***************************************************************************
     * Set the default database connection for models in the production        *
     * environment (see config/connections.js and config/models.js )           *
     ***************************************************************************/

    models: {
        connection: 'localMongodb'
    },

    /***************************************************************************
     * Set the port in the production environment to 80                        *
     ***************************************************************************/

    // port: 80,

    /***************************************************************************
     * Set the log level in production environment to "silent"                 *
     ***************************************************************************/

    // log: {
    //   level: "silent"
    // }

};
