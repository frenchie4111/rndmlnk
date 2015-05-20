/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    var load_from_directory = require( 'load-from-directory' );

    exports.initialize = function( app ) {
        load_from_directory
            .loadArray( './' )
            .forEach( ( item ) => item.addRoutes( app ) );
    };

})();