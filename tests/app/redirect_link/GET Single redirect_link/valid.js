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
            code: 302,
            content_type: /text\/plain; charset=utf-8/,
            body: {}
        } );

        var link = yield db.Link.findAll();
        assert.equal( link.length, 1 );
        assert.equal( link[ 0 ].count, 1 );
    } );
})();