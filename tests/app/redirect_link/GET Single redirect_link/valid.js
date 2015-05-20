/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    it( 'valid', function *() {
        yield fixtures.load( [ 'redirect_link', 'link' ] );

        yield trust_then( {
            path: '/asdfasdf',
            method: 'get'
        }, {
            code: 302
        } )
    } );
})();