/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    module.exports = function( model, valid, invalid_key, invalid_value ) {
        return q
            .async( function *() {
                var valid_clone = lodash.cloneDeep( valid );
                valid_clone[ invalid_key ] = invalid_value;

                yield model.create( valid_clone );
            } )();
    };
})();