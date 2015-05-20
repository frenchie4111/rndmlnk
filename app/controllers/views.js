/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    var _index = function( req, res ) {
        res.render( 'index' );
    };

    exports.addRoutes = function( app ) {
        app.get( '/', _index );
    };
})();