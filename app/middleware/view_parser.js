/**
 * Copyright of Mark One Lifestyle Inc.
 *
 * Authors:
 *     - Mike Lyons (m@mkone.co)
 */

(function() {
    'use strict';

    var path = require( 'path' ),
        express = require( 'express' );

    var public_path = path.resolve( __dirname,'..', 'public' );

    exports.init = function _init( app ) {
        app.set( 'views', path.resolve( __dirname, '..', 'views' ) );
        app.set( 'view engine', 'ejs' );
        app.use( express.static( public_path ) );
    };
})();