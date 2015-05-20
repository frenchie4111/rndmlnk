/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    var EventEmitter = require('events').EventEmitter,
        assign = require( 'object-assign' );

    var HomepageDispatcher = require( '../dispatchers/HomepageDispatcher' ),
        Constants = require( '../constants/HomepageConstants' );

    var LinksFormListStore = assign( {}, EventEmitter.prototype, {
        CHANGE_EVENT: 'change',
        _links: [ 'asdf', '', '' ],

        emitChange: function() {
            this.emit( this.CHANGE_EVENT );
        },

        addChangeListener: function( callback ) {
            this.on( this.CHANGE_EVENT, callback );
        },

        removeChangeListener: function( callback ) {
            this.removeListener( this.CHANGE_EVENT, callback );
        },

        getAll: function() {
            return this._links;
        },

        _valueChanged: function( index, new_value ) {
            this._links[ index ] = new_value;
            this.emitChange();
        },

        _addLink: function() {
            this._links.push( '' );
            this.emitChange();
        }
    } );

    LinksFormListStore.dispatchToken = HomepageDispatcher.register( function( action ) {
        switch( action.type ) {
            case Constants.VALUE_CHANGED:
                LinksFormListStore._valueChanged( action.index, action.new_value );
                break;
            case Constants.ADD_LINK:
                LinksFormListStore._addLink();
                break;
        }
    } );

    module.exports = LinksFormListStore;
})();