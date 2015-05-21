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
        indexDeleted: function( i ) {
            HomepageDispatcher.dispatch( {
                type: Constants.VALUE_REMOVED,
                index: i
            } );
        },
        slugChanged: function( new_slug ) {
            HomepageDispatcher.dispatch( {
                type: Constants.SLUG_CHANGED,
                new_slug: new_slug
            } );
        },
        addLink: function() {
            HomepageDispatcher.dispatch( {
                type: Constants.ADD_LINK
            } );
        },
        submitForm: function() {
            HomepageDispatcher.dispatch( {
                type: Constants.STATES.SUBMITTING
            } );
        }
    };
})();
