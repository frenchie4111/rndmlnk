/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    var q = require( 'q' ),
        path = require( 'path' ),
        fixtures = require( 'sequelize-test-fixtures' );

    before( function *() {
        var models = require( '../../app/models' );
        yield models.init();
        global.db = models.db;
    } );

    before( function() {
        var models = require( '../../app/models' );
        fixtures( models.db, path.resolve( __dirname, '../fixtures/' ) );
        global.fixtures = fixtures;
    } );

    before( function *() {
        global.create_validate = require( './lib/create_validate' );
    } );
})();