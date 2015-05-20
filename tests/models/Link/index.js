/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    var model = {
        model_name: 'Link',
        fixture_name: 'link',
        valid: {
            redirect_link_id: 1,
            link: 'http://test.com/'
        },
        fields: {
            redirect_link_id: {
                invalid: [ null, undefined ],
                valid: []
            },
            link: {
                invalid: [ null, undefined ],
                valid: [ 'http://test2.com/' ]
            },
            count: {
                invalid: [ null, undefined ],
                valid: [ 1 ]
            }
        }
    };

    require( '../lib/validate_sequelize_model' )( model );
})();