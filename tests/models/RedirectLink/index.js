/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    var model = {
        model_name: 'RedirectLink',
        fixture_name: 'redirect_link',
        valid: {
            redirect_link: 'asdfasdf'
        },
        fields: {
            redirect_link: {
                invalid: [ null, undefined ],
                valid: [ 'fdsafdsa' ]
            }
        }
    };

    require( '../lib/validate_sequelize_model' )( model );
})();