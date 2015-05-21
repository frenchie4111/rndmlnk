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
        LinkInfoApp = React.createFactory( require( '../react/components/LinkInfoApp.react.jsx' ) ),
        browserify = require( 'browserify-middleware' ),
        reactify = require( 'reactify' ),
        q = require( 'q' );

    var models = require( '../models' ).db,
        RedirectLink = models.RedirectLink;

    browserify.settings( 'transform', [ 'reactify' ] );
    browserify.settings.mode = ( process.env.NODE_ENV === 'test' ) ? 'test' : 'production';

    var _home = function( req, res ) {
        var markup = React.renderToString( HomepageApp( {} ) );

        console.log( markup );

        res.render( 'homepage', {
            markup: markup
        } );
    };

    var _counts = function( req, res ) {
        q
            .async( function *() {
                var redirect_link = yield RedirectLink.find( {
                    where: {
                        redirect_link: req.params.slug
                    },
                    include: [
                        { all: true }
                    ]
                } );

                if( !redirect_link ) throw Error( 'Not Found' );

                var total = redirect_link.links.reduce( function( full, part ) { return full + part.count }, 0 );

                var markup = React.renderToString( LinkInfoApp( {
                    link: 'http://rndmlnk.com/s/' + req.params.slug,
                    links: redirect_link.links,
                    total: total
                } ) );

                res
                    .render( 'counts', {
                        markup: markup
                    } );
            } )()
            .catch( function( err ) {
                res.status( 500 ).send( err.toString() );
            } );
    };

    exports.addRoutes = function( app ) {
        app.get( '/', _home );
        app.get( '/counts/:slug', _counts );

        app.get( '/homepage.js', browserify( 'app/react/homepage.js' ) );
    };
})();