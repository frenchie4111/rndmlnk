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
        _links: [ '', '', '' ],
        _state: Constants.STATES.ENTERING,
        _slug: null,

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

        getState: function() {
            return this._state;
        },

        getSlug: function() {
            return this._slug;
        },

        _valueChanged: function( index, new_value ) {
            this._links[ index ] = new_value;
            this.emitChange();
        },

        _valueRemoved: function( index ) {
            this._links.splice( index, 1 );
            this.emitChange();
        },

        _addLink: function() {
            this._links.push( '' );
            this.emitChange();
        },

        _setState: function( new_state ) {
            this._state = new_state;
            this.emitChange();
        },

        _setSlug: function( new_slug ) {
            this._slug = new_slug;
            this.emitChange();
        },

        _getLinksForPOST: function() {
            return this._links.map( function( link ) {
                return { link: link };
            } )
        },

        _submitForm: function() {
            var _this = this;
            $
                .post( '/links', {
                    links: _this._getLinksForPOST(),
                    redirect_link: _this.getSlug() || undefined
                }, function( data ) {
                    console.log( 'response', data );
                    _this._setSlug( data.redirect_link );
                    _this._setState( Constants.STATES.SUBMITTED );
                    _this.emitChange();
                } );
        }
    } );

    LinksFormListStore.dispatchToken = HomepageDispatcher.register( function( action ) {
        switch( action.type ) {
            case Constants.VALUE_CHANGED:
                LinksFormListStore._valueChanged( action.index, action.new_value );
                break;
            case Constants.VALUE_REMOVED:
                LinksFormListStore._valueRemoved( action.index );
                break;
            case Constants.SLUG_CHANGED:
                LinksFormListStore._setSlug( action.new_slug );
                break;
            case Constants.ADD_LINK:
                LinksFormListStore._addLink();
                break;
            case Constants.STATES.SUBMITTING:
                LinksFormListStore._setState( action.type );
                LinksFormListStore._submitForm();
                break;
            case Constants.STATES.SUBMITTED:
                LinksFormListStore._setState( action.type );
                LinksFormListStore._setSlug( action.slug );
                break;
        }
    } );

    module.exports = LinksFormListStore;
})();