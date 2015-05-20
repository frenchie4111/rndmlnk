/**
 * This file is licensed under the MIT license
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    var fs = require( 'fs' );

    var match = process.env.DATABASE_URL.match( /postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/ );

    var config = {
        'production': {
            database: match[ 5 ],
            username: match[ 1 ],
            password: match[ 2 ],
            host: match[ 3 ],
            dialect: 'postgres'
        }
    };

    fs.writeFile( 'heroku_config.json', JSON.stringify( config ) );
})();