/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    var express = require( 'express' ),
        q = require( 'q' ),
        models = require( './models' );

    var controllers = require( './controllers' ),
        middleware = require( './middleware' );

    var app = express(),
        server = null;

    middleware.initialize( app );

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