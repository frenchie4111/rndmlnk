/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

( function() {
    'use strict';

    var _ = require( 'underscore' ),
        q = require( 'q' );

    var models = require( '../models' ).db,
        RedirectLink = models.RedirectLink;

    var _randomLink = function( req, res ) {
        q
            .async( function *() {
                var redirect_link = yield RedirectLink.find( {
                    where: {
                        redirect_link: req.params.link_slug
                    },
                    include: [
                        { all: true }
                    ]
                } );

                assert.isDefined( redirect_link.links );

                var link = _.sample( redirect_link.links );

                yield link.increment( 'count' );

                res.redirect( link.link );
            } )()
            .catch( function( err ) {
                res.status( 500 ).send( err.toString() );
            } );
    };


    exports.addRoutes = function( app ) {
        app.get( '/:link_slug', _randomLink );
    }
} )();