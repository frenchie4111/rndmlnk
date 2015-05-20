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

    var _counts = function( req, res ) {
        res.render( 'counts', {
            slug: req.params.slug
        } );
    };

    exports.addRoutes = function( app ) {
        app.get( '/', _index );
        app.get( '/counts/:slug', _counts );
    };
})();