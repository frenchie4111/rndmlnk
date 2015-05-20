/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    var jsx = require( 'node-jsx' ).install( { extension: '.jsx' } ),
        React = require( 'react' ),
        HomepageApp = React.createFactory( require( '../react/components/HomepageApp.react.jsx' ) ),
        browserify = require( 'browserify-middleware' ),
        reactify = require( 'reactify' );

    browserify.settings( 'transform', [ 'reactify' ] );
    browserify.settings.mode = 'production';

    var _home = function( req, res ) {
        var markup = React.renderToString( HomepageApp( {} ) );

        console.log( markup );

        res.render( 'homepage', {
            markup: markup
        } );
    };

    var _counts = function( req, res ) {
        res.render( 'counts', {
            slug: req.params.slug
        } );
    };

    exports.addRoutes = function( app ) {
        app.get( '/', _home );
        app.get( '/counts/:slug', _counts );

        app.get( '/homepage.js', browserify( 'app/react/homepage.js' ) );
    };
})();