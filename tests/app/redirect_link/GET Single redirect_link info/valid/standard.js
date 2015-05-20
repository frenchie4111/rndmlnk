/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    it( 'standard', function *() {
        yield fixtures.load( [ 'redirect_link', 'link' ] );

        yield trust_then( {
            path: '/links/asdfasdf',
            method: 'get'
        }, {
            body: trust_redirect_link
        } );
    } );
})();