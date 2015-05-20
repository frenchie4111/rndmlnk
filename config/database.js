/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    var match = null;
    if( process.env.DATABASE_URL ) {
        match = process.env.DATABASE_URL.match( /postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/ );
    }
    module.exports = {
        test: {
            database_name: 'rndmlnk_test',
            database_username: 'rndmlnk',
            database_password: 'rndmlnk',
            database_port: 5432,
            database_url: 'localhost',
            sequelize_logging: false,
            database_native: false
        },
        development: {
            database_name: 'rndmlnk_development',
            database_username: 'rndmlnk',
            database_password: 'rndmlnk',
            database_port: 5432,
            database_url: 'localhost',
            sequelize_logging: false,
            database_native: false
        },
        heroku: {
            sequelize_logging: console.log,
            database_native: false,

            database_port: ( match !== null ) ? match[ 4 ] : null,
            database_name: ( match !== null ) ? match[ 5 ] : null,
            database_username: ( match !== null ) ? match[ 1 ] : null,
            database_password: ( match !== null ) ? match[ 2 ] : null,
            database_url: ( match !== null ) ? match[ 3 ] : null
        }
    };
})();