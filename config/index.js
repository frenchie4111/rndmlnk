/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    module.exports = {
        env: process.env.NODE_ENV || 'development',
        database: require( './database' )
    };
})();