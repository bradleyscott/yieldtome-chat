/**
 * yieldtomeAuth
 *
 * @module      :: yieldto.me Bearer token validation
 * @description :: Calls the yieldto.me API to check the Authorization headers in the request contain a valid Bearer token
 * @docs        :: https://api.yieldto.me/Help/Api/GET-Ping-CheckAuth
 *
 */
module.exports = function(req, res, next) {

    if (req.session.authenticated) { // Authorize if previously authenticated
    	sails.log('Session previously authenticated');
        return next();
    } else { // Try to Authenticate against yieldtome
    	sails.log('Attempting authentication against yieldto.me API @ ' + sails.config.yieldtome.host + ':' + sails.config.yieldtome.port);

        var options = {
            host: sails.config.yieldtome.host,
            port: sails.config.yieldtome.port,
            path: '/Ping/CheckAuth',
            method: 'GET',
            headers: {
                Authorization: req.headers.authorization
            }
        };

        var http = require('http');
        http.get(options, function(response) {

            if (response.statusCode == '200') {
                sails.log('Successfully authenticated with yieldto.me');
                req.session.authenticated = true;
                return next();
            } else {
                var message = 'Failed authentication with yieldto.me';
                sails.log(message);
                return res.forbidden(message);
            };
        }).on('error', function(err) {
            var message = 'A problem occured when trying to authenticate with yieldto.me. ' + err;
            sails.log(message);
            return res.forbidden(message);
        });
    }
}
