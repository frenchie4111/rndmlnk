/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    require( '../models/before' );

    var server = require( '../../app' );

    beforeEach( function *() {
        yield server.start();
        global.trust_then = require( 'trust-rest-then' )( 'http://localhost:1338' );
    } );

    afterEach( function *() {
        yield server.stop();
    } );
})();