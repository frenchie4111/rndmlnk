/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    var models_to_delete = [
        'Link',
        'RedirectLink'
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

})();