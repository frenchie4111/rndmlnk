/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    var _ = require( 'underscore' ),
        q = require( 'q' ),
        assert = require( 'chai' ).assert;

    var models = require( '../models' ).db,
        RedirectLink = models.RedirectLink,
        Link = models.Link;

    var LINK_REGEX = new RegExp( "^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?" );

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

    var _createRandomSlug = function() {
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var text = _.sample( possible.split( '' ), 8 ).join( '' );
        return text;
    };

    var _createLink = function( req, res ) {
        q
            .async( function *() {
                assert.isDefined( req.body, 'Something has gone terribly wrong' );
                assert.isDefined( req.body.links, 'No Links specified' );
                assert.isTrue( req.body.links.length > 0, 'No Links specified' );

                // Check links
                var invalids = req.body.links
                    .map( function( link, i ) {
                        if( !LINK_REGEX.test( link.link ) ) {
                            return i;
                        }
                        return null;
                    } )
                    .filter( function( item ) {
                        return ( item !== null );
                    } );

                console.log( invalids );

                if( invalids.length > 0 ) {
                    var err = new Error();
                    err.name = 'InvalidLink';
                    err.message = 'Invalid Link' + ( ( invalids.length !== 1 ) ? 's' : '' );
                    err.invalids = invalids;
                    throw err;
                }

                if( !req.body.hasOwnProperty( 'redirect_link' ) ) {
                    req.body.redirect_link = _createRandomSlug();
                }

                var redirect_link = yield RedirectLink.create( req.body );

                var link_promises = _
                    .map( req.body.links, function( link ) {
                        return Link.create( _.extend( link, { redirect_link_id: redirect_link.id } ) );
                    } );

                yield q.all( link_promises );

                redirect_link = yield RedirectLink.find( {
                    where: {
                        id: redirect_link.id
                    },
                    include: [
                        { all: true }
                    ]
                } );

                res.send( redirect_link );
            } )()
            .catch( function( err ) {
                console.log( err.stack );

                switch( err.name ) {
                    case( 'InvalidLink' ):
                        res.status( 400 ).send( { error: err.message, invalids: err.invalids } );
                        break;
                    case( 'SequelizeUniqueConstraintError' ):
                        res.status( 400 ).send( { error: 'Url Already Taken' } );
                        break;
                    default:
                        res.status( 500 ).send( { error: err.toString() } );
                        break;
                }
            } );
    };

    var _getLink = function( req, res ) {
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

                res.send( redirect_link );
            } )()
            .catch( function( err ) {
                res.status( 500 ).send( err.toString() );
            } );
    };

    exports.addRoutes = function( app ) {
        app.get( '/s/:link_slug', _randomLink );

        app.post( '/links', _createLink );
        app.get( '/links/:link_slug', _getLink )
    }
})();