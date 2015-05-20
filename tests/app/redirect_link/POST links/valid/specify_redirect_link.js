/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    it( 'standard', function *() {
        var valid_redirect_link_clone = lodash.cloneDeep( valid_redirect_link );
        valid_redirect_link_clone.redirect_link = 'testtest';

        var trust_redirect_link_clone = lodash.cloneDeep( trust_redirect_link );
        trust_redirect_link_clone.redirect_link = {
            value: 'testtest'
        };

        yield trust_then( {
            path: '/links',
            method: 'post',
            body: valid_redirect_link_clone
        }, {
            body: trust_redirect_link_clone
        } );
    } );
})();