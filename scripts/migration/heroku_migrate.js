/**
 * This file is licensed under the MIT license
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */
(function() {
    'use strict';

    var models = require( './../../app/models/index' );

    var match = process.env.DATABASE_URL.match( /postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/ );

    var options = {
        port: process.env.PORT || 5000,
        database_port: match[ 4 ],
        database_name: match[ 5 ],
        database_username: match[ 1 ],
        database_password: match[ 2 ],
        database_url: match[ 3 ]
    };

    models.init( options );

    var migrator = models.db.sequelize.getMigrator( {
        path: process.cwd() + '/migrations',
        filesFilter: /\.js$/
    } );

    console.log( 'Beginning Migration' );

    migrator
        .migrate()
        .then( function( mess ) {
            console.log( 'Migration Complete' );
            console.log( mess );
            process.exit();
        } );
})();