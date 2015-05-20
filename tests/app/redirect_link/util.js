/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    before( function() {
        global.valid_redirect_link = {
            links: [
                {
                    link: 'http://test.com/'
                }
            ]
        };

        global.trust_redirect_link = {
            id: {
                type: 'number'
            },
            redirect_link: {
                type: 'string'
            },
            links: {
                type: 'array',
                nested: {
                    id: {
                        type: 'number'
                    },
                    link: {
                        type: 'string'
                    },
                    count: {
                        type: 'number'
                    },
                    redirect_link_id: {
                        type: 'number'
                    },
                    created_at: {
                        type: 'string'
                    },
                    updated_at: {
                        type: 'string'
                    }
                }
            },
            created_at: {
                type: 'string'
            },
            updated_at: {
                type: 'string'
            }
        };
    } );

    after( function() {
        delete global.valid_redirect_link;
    } );
})();