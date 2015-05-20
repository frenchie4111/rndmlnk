/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    // Do this before mocha-directory, so that tests can see it
    global.it_throws = require( './lib/it_throws' );
    global.assert = require( 'chai' ).assert;
    global.q = require( 'q' );
    global[ '_' ] = require( 'underscore' );
    global.lodash = require( 'lodash' );

    require( 'mocha-runnable-generators' );
    require( 'mocha-directory' )();

    var config = require( '../config' );

    before( function setupEnv() {
        process.env.NODE_ENV = 'test';
        process.env.PORT = 1338;
        config.env = 'test';
    } );

    before( function() {

    } );
})();