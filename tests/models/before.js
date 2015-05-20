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

    var models_to_delete = [
    ];

    beforeEach( function *() {
        var models = require( '../../app/models' );

        var promise = models_to_delete
            .reduce( function( full, className ) {
                var tableName = models.db[ className ].tableName;
                return full.then( () => {
                    return models.db.sequelize.query( 'DELETE FROM "' + tableName + '";' );
                } );
            }, q.try( function() {} ) );

        yield promise.catch( console.error );
    } );

    before( function *() {
        global.create_validate = require( './lib/create_validate' );
    } );
})();