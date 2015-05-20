/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    module.exports = function( title, error_name, generator ) {
        it( title, function( done ) {
            assert.isDefined( error_name, 'it_throws error_name must be defined' );
            assert.isDefined( generator, 'it_throws generator must be defined' );

            q
                .async( generator )()
                .then( function() {
                    done( new Error( 'Expected ' + title + ' to throw' ) );
                } )
                .catch( function( err ) {
                    assert.equal( err.name, error_name );
                    done();
                } )
                .catch( function( err ) {
                    done( err );
                } );
        } );
    };
})();