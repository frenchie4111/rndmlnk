/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    it( 'standard', function *() {
        yield trust_then( {
            path: '/links',
            method: 'post',
            body: valid_redirect_link
        }, {
            body: trust_redirect_link
        } );
    } );
})();