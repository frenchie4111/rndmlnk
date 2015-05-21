/**
 * Copyright of Michael Lyons
 *
 * Authors:
 *     - Michael Lyons (mdl0394@gmail.com)
 */

(function() {
    'use strict';

    var React = require( 'react' );

    var Title = require( './Title.react.jsx' ),
        LinksForm = require( './LinksForm.react.jsx' ),
        LinksSubmitting = require( './LinksSubmitting.react.jsx' );

    var LinksFormActionCreator = require( '../actions/LinksFormActionCreator' ),
        LinksFormListStore = require( '../stores/LinksFormListStore' ),
        Constants = require( '../constants/HomepageConstants' );

    var HomepageApp;

    //noinspection JSUnusedAssignment,JSUnusedGlobalSymbols
    module.exports = HomepageApp = React.createClass( {
        _style: {
        },
        _getStateFromStores: function() {
            return {
                form_state: LinksFormListStore.getState()
            };
        },
        _onChange: function() {
            this.setState( this._getStateFromStores() );
        },
        getDefaultProps: function() {
            return {
            }
        },
        getInitialState: function() {
            return this._getStateFromStores();
        },
        componentDidMount: function() {
            LinksFormListStore.addChangeListener( this._onChange );
        },
        componentDidUnmount: function() {
            LinksFormListStore.removeChangeListener( this._onChange );
        },
        _renderFormState: function() {
            switch( this.state.form_state ) {
                case( Constants.STATES.ENTERING ):
                    return (
                        <LinksForm />
                    );
                case( Constants.STATES.SUBMITTING ):
                    return (
                        <LinksSubmitting />
                    );
            }
        },
        render: function() {
            console.log( this.state );
            return (
                <div
                    onClick={ this.onClick }
                    className='container'>
                    <Title
                        title={ 'Rndmlnk' }
                        subtitle={ 'Creates a link that will randomly redirect to a list of other links' } />

                    { this._renderFormState() }
                </div>
            );
        }
    } );
})();