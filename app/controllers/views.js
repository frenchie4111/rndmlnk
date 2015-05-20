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
        RndmlnkApp = React.createFactory( require( '../react/components/RndmlnkApp.react' ) ),
        browserify = require( 'browserify-middleware' ),
        reactify = require( 'reactify' );

    browserify.settings( 'transform', [ 'reactify' ] );

    var _reactTest = function( req, res ) {
        var markup = React.renderToString( RndmlnkApp( {} ) );

        res.render( 'react', {
            markup: markup
        } );
    };

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
        app.get( '/react', _reactTest );

        app.get( '/bundle.js', browserify( 'app/react/browser.js' ) );
    };
})();