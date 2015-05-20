/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    var express = require( 'express' ),
        cors = require( 'cors' ),
        q = require( 'q' ),
        models = require( './models' );

    var controllers = require( './controllers' ),
        middleware = require( './middleware' );

    var app = express(),
        server = null;

    middleware.initialize( app );

    var whitelist = [ 'https://doubledor.com', 'http://www.doubledor.com', 'http://doubledor.com', 'http://127.0.0.1:8282' ];
    //noinspection JSUnusedGlobalSymbols
    var cors_options = {
        origin: function( origin, callback ) {
            var origin_is_whitelisted = whitelist.indexOf( origin ) !== -1;
            console.log( origin, origin_is_whitelisted, whitelist );
            callback( null, origin_is_whitelisted );
        }
    };
    app.use( cors( cors_options ) );

    var startServer = function() {
        return q.Promise( function( resolve ) {
            var server = app.listen( process.env.PORT || 1337, function() {
                controllers.initialize( app );
                resolve( server );
            } );
        } );
    };

    exports.start = function() {
        return q
            .async( function *() {
                yield models.init();
                server = yield startServer();
            } )()
            .catch( console.error );
    };

    exports.stop = function() {
        return q.Promise( function( resolve ) {
            if( server ) {
                server.on( 'close', function() {
                    resolve();
                } );
                server.close();
            }
        } );
    };
})();