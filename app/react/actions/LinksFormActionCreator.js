/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    var HomepageDispatcher = require( '../dispatchers/HomepageDispatcher' ),
        Constants = require( '../constants/HomepageConstants' );

    module.exports = {
        textChanged: function( i, new_text ) {
            HomepageDispatcher.dispatch( {
                type: Constants.VALUE_CHANGED,
                index: i,
                new_value: new_text
            } );
        },
        addLink: function() {
            HomepageDispatcher.dispatch( {
                type: Constants.ADD_LINK
            } );
        }
    };
})();
